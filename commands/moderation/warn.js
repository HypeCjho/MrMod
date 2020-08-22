const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const fs = require('fs')
const db = require('quick.db')
module.exports = {
  name: 'warn',
  description: "Shows info about all command",
  category: "info",
  run: async (bot, message, args) => {
    let user = message.mentions.users.first()
    let reason = args.slice(1).join(" ")
    message.channel.send(`${user} has been warned`)
    db.add(`warn_` + user.id, 1)
  }
}