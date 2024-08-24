//           CREATED BY SEBASTIAN VARKEY 
//
// # FEEL FREE TO USE ANY PART OF CODE
// ## FOR HELP CONTACT ME ON DISCORD
// ## Contact    [ https://discord.com/users/891002113134563428 ]
// ## Support Server [ https://discord.com/invite/apF2ZBXZVF ]
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('format')
    .setDescription('Check valid and invalid name formats'),

  async execute(interaction) {
    const embed = new MessageEmbed()
      .setColor('#3d3d3d')
      .setTitle('Name Format Examples')
      .setDescription('Here are examples of valid and invalid name formats:')
      .addFields(
        { name: 'Valid Format', value: '`Firstname_Secondname`', inline: false },
        { name: 'Examples', value: '`John_Doe`\n`Alice_Wonderland`\n`Bob_Smith`', inline: true },
        { name: '\u200B', value: '\u200B', inline: false },
        { name: 'Invalid Formats', value: 'Names must be in the format `Firstname_Secondname`.', inline: false },
        { name: 'Examples', value: '`firstname_secondname`\n`FirstnameSecondname`\n`FIRSTNAME_SECONDNAME`', inline: true }
      );

    await interaction.reply({ embeds: [embed] });
  },
};
