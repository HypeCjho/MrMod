const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const fs = require('fs')
const db = require('quick.db')
module.exports = {
  name: 'lock',
  description: "Shows info about all command",
  category: "info",
  run: async (bot, message, args) => {
    let channel = message.mentions.channels.first() ? message.mentions.channels.first() : message.channel
    channel.overwritePermissions([{
      id: message.guild.roles.everyone.id,
      deny: ['SEND_MESSAGES']
    }])
  }
}