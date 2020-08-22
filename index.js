//const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { Collection, Client, Discord } = require("discord.js");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { get } = require('request-promise-native')
const bot = new Client({
  disableEveryone: true
});

var express = require("express");
var app = express();

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const config = require("./config.json");

bot.commands = new Collection();
const TOKEN = process.env.TOKEN;
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");

bot.prefix = config.prefix;
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(bot);
});

bot.on("ready", async () => {
  
  bot.user.setActivity('Made by Hyp3r#0001', { type: "WATCHING" });
  console.log(`Logged in as ${bot.user.tag}`)
  
});

bot.on("message", async message => {
  
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  
  if(message.content.toLowerCase().includes('nigga') || message.content.toLowerCase().includes('nigger')) return message.delete();
  if (message.author.bot) return;
  
  if (message.content.toLowerCase().startsWith(config.prefix)) {
    
    const members = db.fetch(`members`)
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length == 0) return;
    let command 
    if(bot.commands.has(cmd)) command = bot.commands.get(cmd)
    else command = bot.commands.get(bot.aliases.get(cmd))
    
    try {     
      command.run(bot, message, args)
    }catch(err) {      
      return;     
    }
    
  }else{
    
    return;
    
  }
  
});

bot.login(process.env.TOKEN);
