const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const db = require('quick.db')
const fs = require('fs')
module.exports = {
  name: 'usercard',
  aliases: ["profile"],
  description: "Check the mentioned user's profile",
  category: "utility",
  run: async (bot, message, args) => {
    
    let user = message.mentions.users.first() || message.author
    const roles = message.guild.members.cache.get(user.id).roles.cache.filter(a => !a.everyone)
    let r = roles.map(n => n).join(" ");
    if(roles === undefined) r = "None";
    let accountCreation = new Date(user.createdTimestamp)
    let accountJoined = new Date(message.guild.members.cache.get(user.id).joinedTimestamp)
    let Embed = new MessageEmbed()
    .setAuthor(`${user.username} Profile`, bot.user.displayAvatarURL())
    .setThumbnail(user.displayAvatarURL({dynamic: true}))
    .setDescription(`**Nickname** : ${message.guild.members.cache.get(user.id).displayName}`)
    .addField(`Joined`, accountJoined.toUTCString())
    .addField(`Registered`, accountCreation.toUTCString())
    .addField(`Roles・${message.guild.members.cache.get(user.id).roles.cache.size}`, r)
    .setColor('#8b64e3')
    message.channel.send(Embed)
    
  }
}