//           CREATED BY SEBASTIAN VARKEY 
//
// # FEEL FREE TO USE ANY PART OF CODE
// ## FOR HELP CONTACT ME ON DISCORD
// ## Contact    [ https://discord.com/users/891002113134563428 ]
// ## Support Server [ https://discord.com/invite/apF2ZBXZVF ]
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../config.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('check')
    .setDescription('Check setup information'),

  async execute(interaction) {
    const checkEmbed = new MessageEmbed()
      .setColor('#7289DA')
      .setTitle('🔍 Setup Information')
      .addFields(
        { name: 'Response Channel', value: `<#${config.responseChannelId}>`, inline: true },
        { name: 'Command Usage Channel', value: `<#${config.commandUsageChannelId}>`, inline: true },
        { name: 'Unwhitelist Role', value: `<@&${config.unwhitelistRoleId}>`, inline: true },
        { name: 'Whitelist Role', value: `<@&${config.whitelistRoleId}>`, inline: true }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [checkEmbed] });
  },
};
