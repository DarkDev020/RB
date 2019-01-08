const Discord = require("discord.js");



module.exports.run = async (bot, message, args) =>{



  let bicon = bot.user.displayAvatarURL;



  let botembed = new Discord.RichEmbed()



  .setAuthor("❯ ReaperBot", bicon)



  .setColor("#00fff2")



  .setThumbnail(bicon)



  .addField("**❯ Author**", "grimreaper55death")



  .addField("**❯ Library**", "discord.js",true)



  .addField("**❯ Version**", "1.0.0",true)



  .addField("**❯ Invite**", "https://discordapp.com/api/oauth2/authorize?client_id=525814000500342790&permissions=8&scope=bot")



  .addField("**❯ Created On**", bot.user.createdAt.toDateString());







  return message.channel.send(botembed);



}



module.exports.help = {



  name: "botinfo"



}