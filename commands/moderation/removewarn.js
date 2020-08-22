const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const fs = require('fs')
const db = require('quick.db')
module.exports = {
  name: 'removewarn',
  description: "Shows info about all command",
  category: "info",
  run: async (bot, message, args) => {
    let user = message.mentions.users.first()
    let amount = parseInt(args[1])
    db.subtract(`warn_` + user.id, amount)
    message.channel.send(`Warn has been removed`)
  }
}