const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const fs = require('fs')
const db = require('quick.db')
module.exports = {
  name: 'help',
  description: "Shows info about all command",
  category: "info",
  run: async (bot, message, args) => {
    let Embed = new MessageEmbed()
    .addField("Deletechannel", "Delete the mentioned channel")
    .addField("Usercard", "Shows detailed info about the mentioned user")
    .addField("Mute", "Mute the mentioned user")
    .addField("Unmute", "Unmute the mentioned user")
    .addField("Ban", "Ban the mentioned user")
    .addField("Unban", "Unban user with ID")
    .addField("Lockdown", "Lock all channel in the server")
    .addField("Unlock-Server", "Unlock all channel in the server")
    .setColor('#8b64e3')
    let m = await message.channel.send(Embed)
    m.react('⬅️')
    m.react('❌')
    m.react('➡️')
    let page = 1;
    const collector = m.createReactionCollector((reaction, user) => user.id === message.author.id)
    collector.on('collect', async (reaction, user) => {
      if(reaction.emoji.name === '❌') {
        m.delete();
        message.delete();
        return collector.stop()
      }
      if(reaction.emoji.name === '➡️') page++;
      if(reaction.emoji.name === '⬅️') page--;
      reaction.users.remove(user.id)
      switch(page) {
        case 1: {
          Embed = new MessageEmbed()
          .addField("Deletechannel", "Delete the mentioned channel")
          .addField("Usercard", "Shows detailed info about the mentioned user")
          .addField("Mute", "Mute the mentioned user")
          .addField("Clear", "Clear messages")
          .addField("Ban", "Ban the mentioned user")
          .addField("Lockdown", "Lock all channel in the server")
          .addField("Unlock-Server", "Unlock all channel in the server")
          .addField("Nick", "Change user's nickname")
          .setColor('#8b64e3')
          m.edit(Embed)
          break;
        }
        case 2: {
          Embed = new MessageEmbed()
          .addField("Lock", "Lock the mentioned channel")
          .addField("Unlock", "Unlock the mentioned channel")
          .addField("Kick", "Kick the mentioned user")
          .addField("Warn", "Warn the mentioned user")
          .addField("Warns", "Check the mentioned user's warns")
          .addField("Clear-Warns", "Clear all mentioned user's warns")
          .addField("Removewarn", "Remove user's warn")
          .addField("Slowmode", "Change current channel's slowmode")
          .setColor('#8b64e3')
          m.edit(Embed)
          break;
        }
        default: {
          Embed = new MessageEmbed()
          
          m.edit(Embed)
          break;
        }
      }
    })
  }
}