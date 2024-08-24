//           CREATED BY SEBASTIAN VARKEY 
//
// # FEEL FREE TO USE ANY PART OF CODE
// ## FOR HELP CONTACT ME ON DISCORD
// ## Contact    [ https://discord.com/users/891002113134563428 ]
// ## Support Server [ https://discord.com/invite/apF2ZBXZVF ]
const { Client, Intents, Collection } = require('discord.js');
const fs = require('fs');
const { getRandomActivity } = require('./utls/activity.js'); 
const { printWatermark } = require('./utls/pw.js');
const config = require('./config.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

function setRandomActivity() {
  const activity = getRandomActivity();

  if (activity.showMembers) {
    const totalMembers = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);

    client.user.setPresence({
      activities: [{ name: `${activity.name} (${totalMembers} members)`, type: activity.type }],
      status: 'online'
    });
  } else {
    client.user.setPresence({
      activities: [{ name: activity.name, type: activity.type }],
      status: 'online'
    });
  }
}

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);


  printWatermark();

  setRandomActivity();

  try {
    const commandData = client.commands.map(command => command.data.toJSON());
    const commands = await client.guilds.cache.get(config.guildId)?.commands.set(commandData);
    console.log(`Successfully registered ${commands.size} slash commands!`);
  } catch (error) {
    console.error('Error registering slash commands:', error);
  }

  setInterval(() => {
    setRandomActivity();
  }, 15000);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, options, guildId, user, member } = interaction;
  const command = client.commands.get(commandName);

  if (!command) return;

  try {
    await command.execute(interaction, options, guildId, user, member);
  } catch (error) {
    console.error('Error executing command:', error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.login(config.token);
