const Discord = require('discord.js');



module.exports.run = async(bot, message, args) =>{

  let embed = new Discord.RichEmbed()

  .setTitle("Restart")

  .setDescription("Sorry, the `restart` command can only be executed by the bot owner.")

  .setColor("#cdf785");

  if(message.author.id !== '343586271257427968') return message.channel.send(embed);

  

message.channel.send(`Restarted in ${Math.floor(bot.ping)}ms`).then(() =>{

process.exit(1);

})

 



                                           }

module.exports.help = {

name: "restart"

}