const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("594557196046696458")
setInterval(function() {
channel.send(`Heyyyyyyy I'm here. I'm here to spam texting or writing or typing or something like that I don't know why I'm here but hell yeah I like this place for reason I don't know what is it wooooooo weeeeeeee waaaaaaa it's party timeeee with spaming
`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
