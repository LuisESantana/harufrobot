const Discord = require('discord.js'); // Require the Discord.js library.
const music = require('discord.js-musicbot-addon');
const client = new Discord.Client();
const settings = require('./settings.json')

client.on('ready', () => {
  client.user.setActivity('God', { type: "STREAMING", url: 'https://www.twitch.tv/onlyafro'})
});

client.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

music.start(client, settings);
client.login(settings.token); 