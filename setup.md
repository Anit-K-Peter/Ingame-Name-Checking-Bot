# 🛠️ Setup Voice Channels

Welcome to the Ingame Name Checking Bot setup guide 

## 1, Create Bot

- Create a bot account on Discord.
  - Go to [Discord Developer Portal](https://discord.com/developers/applications).
  - Click on "New Application".
  - Give the application a name and click on "Create".
  - Navigate to the "Bot" tab.
  - Turn on the bot by clicking "Add Bot".
  - Copy the bot token from the "Bot" tab. **Keep this token secure and do not share it.**

## 2, Create Channels
- Create these channels or utilize existing ones.
  - **Response Channel**: Used to view the in-game names that users have submitted. Example command name: `#Whitelisting-Names`.
  - **Command Using Channel**: Sets the channel for sending the `/apply` command. Example channel name: `#Application`.

## 3, Edit config.js

- Open `config.js` and replace the placeholders with the respective channel IDs and bot token.

```javascript
module.exports = {
  token: 'YOUR_TOKEN_HERE',  // Replace with your actual token
  clientId: 'YOUR_CLIENT_ID_HERE',
  guildId: 'YOUR_GUILD_ID_HERE',
  responseChannelId: 'YOUR_RESPONSE_CHANNEL_ID_HERE',
  commandUsageChannelId: 'YOUR_COMMAND_USAGE_CHANNEL_ID_HERE',
  unwhitelistRoleId: 'YOUR_UNWHITELIST_ROLE_ID_HERE',
  whitelistRoleId: 'YOUR_WHITELIST_ROLE_ID_HERE'
};
```
## 4, Bot Installation

- Open your terminal or command prompt.
- Navigate to the directory where you saved the bot files.

## 4.5, Installation

- Download & install [Node.js](https://nodejs.org/en/download/package-manager).
- Run the following command in the bot directory to install dependencies:

```bash
npm install
```

## 5, Start The Bot

- Run the bot by executing the main script file using Node.js:

```bash
node Index.js
```

- If you are using [replit.com](https://replit.com), click the green "Run" button.

### Default Prefix

- The default prefix for commands is `s!`. You can change this in the `config.js` file.

---

#### Powered by GOD DC DEVELOPER COMMUNITY

