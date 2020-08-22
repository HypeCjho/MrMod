const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const fs = require('fs')
const db = require('quick.db')
module.exports = {
  name: 'deletechannel',
  description: "Shows info about all command",
  category: "info",
  run: async (bot, message, args) => {
    let ch = message.mentions.channels.first()
    if(!ch) ch = message.channel
    message.guild.channels.cache.get(ch.id).delete();
  }
}