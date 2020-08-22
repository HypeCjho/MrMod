const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const fs = require('fs')
const db = require('quick.db')
module.exports = {
  name: 'clear-warns',
  description: "Shows info about all command",
  category: "info",
  run: async (bot, message, args) => {
    let user = message.mentions.users.first()
    db.delete(`warn_` + user.id)
    message.channel.send(`Warns has been cleared`)
  }
}