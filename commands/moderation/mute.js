const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const db = require('quick.db')
const fs = require('fs')
module.exports = {
  name: 'mute',
  aliases: ['silence'],
  description: "Mute mentioned user",
  category: "moderation",
  usage: "<user> [reason]",
  run: async (bot, message, args) => {
    
    let user = message.mentions.users.first()
    let role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
    if(!role) {    
      message.guild.roles.create({data: {
        name: "Muted"
      }}).then(r => {   
        message.guild.channels.cache.forEach(ch => ch.updateOverwrite(message.guild.roles.cache.get(r.id), { SEND_MESSAGES:   false }))
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "Unspecified";
        let member = message.guild.members.cache.get(user.id)
        member.roles.add(r.id)
        let Embed = new MessageEmbed()
        .setDescription(`<:tick:741526433607712779> **${user.tag}** has been muted`)
        .addField("Reason", reason)
        .setColor('#8b64e3')
        .setTimestamp()
        .setFooter(`Moderator : ${message.author.tag}`)
        message.channel.send(Embed)
        return;
      }) 
    }
    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Unspecified";
    let member = message.guild.members.cache.get(user.id)
    member.roles.add(role.id)
    let Embed = new MessageEmbed()
    .setDescription(`<:tick:741526433607712779> **${user.tag}** has been muted`)
    .addField("Reason", reason)
    .setColor('#8b64e3')
    .setTimestamp()
    .setFooter(`Moderator : ${message.author.tag}`)
    message.channel.send(Embed)
    return;
    
  }
}