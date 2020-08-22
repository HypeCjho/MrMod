const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const fs = require('fs')
const db = require('quick.db')
module.exports = {
  name: 'nick',
  description: "Shows info about all command",
  category: "info",
  run: async (bot, message, args) => {
    let user = message.mentions.members.first()
    let nickname = args.join(" ")
    if(!nickname) return message.channel.send("Please specify the nickname!")
    user.setNickname(nickname)
  }
}