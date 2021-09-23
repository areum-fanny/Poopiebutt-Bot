/*const express = require('express')
const app = express();
//const path = require('path')*/
const process = require('process');
require('dotenv').config();
//const PORT = process.env.PORT || 5000

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const prefix = '!';

client.once('ready', () => {
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

/*app.listen(PORT,() =>
    console.log(`Exercise four is running in localhost:${PORT}`)
);*/