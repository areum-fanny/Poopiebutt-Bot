const Discord = require('discord.js');
const process = require('process');
const client = new Discord.Client();
const prefix = '!';
require('dotenv').config();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    else {
        console.log("Happening")
        const channelId = msg.channel.id;
        const commandBody = msg.content.slice(prefix.length);
        const args = commandBody.split(" ");
        const command = args.shift().toLowerCase();
        if (command === 'play') {
            msg.reply("Im ready to play")
            return;
        }
    }
});

client.login(process.env.TOKEN);