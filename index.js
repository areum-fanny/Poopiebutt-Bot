const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log(msg);
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
    else if(msg.content === "What's your name"){
        msg.reply('Poooooopiebutt');
    }
});

client.login('MzczODcwOTY5MTQxNDYwOTk3.WfSweQ.bONHrwoFLS3xYboYz7Zt8-0ZWnk');