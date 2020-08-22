const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const fs = require('fs')
const db = require('quick.db')
module.exports = {
  name: 'warns',
  description: "Shows info about all command",
  category: "info",
  run: async (bot, message, args) => {
    let user = message.mentions.users.first()
    let warns = db.fetch(`warn_` + user.id)
    if(!warns) warns = 0;
    message.channel.send(`**${user.tag}** has **${warns}** warn(s)`)
  }
}