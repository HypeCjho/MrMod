const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const fs = require('fs')
const db = require('quick.db')
const ms = require('ms')
module.exports = {
  name: 'slowmode',
  description: "Shows info about all command",
  category: "info",
  run: async (bot, message, args) => {
    let channel = message.mentions.channels.first() || message.channel
    let seconds = Math.round(ms(parseInt(args[0])) / 1000)
    channel.setRateLimitPerUser(seconds)
  }
}