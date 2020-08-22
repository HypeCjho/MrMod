const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const db = require('quick.db')
const fs = require('fs')
module.exports = {
  name: 'ban',
  description: "Ban the mentioned user",
  category: "moderation",
  usage: "<user> [reason]",
  run: async (bot, message, args) => {
    
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("You don't have permission to execute this command!")
    let user = message.mentions.users.first()
    if(!user) return message.channel.send("Please mention the user!")
    let member = message.guild.members.cache.get(user.id)
    if(!member) return message.channel.send("The user you mentioned is not in this guild!")
    if(message.member.roles.highest.rawPosition <= member.roles.highest.rawPosition) return message.channel.send("You're not high enough in hierachy to kick that user!")
    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Unspecified";
    member.ban(reason).then(() => {
      
      message.delete();
      let Embed = new MessageEmbed()
      .setDescription(`<:tick:741526433607712779> **${user.tag}** has been banned`)
      .addField("Reason", reason)
      .setColor("#0494fc")
      .setTimestamp()
      .setFooter(`Moderator : ${message.author.tag}`)
      message.channel.send(Embed)
      
    })
    
  }
}