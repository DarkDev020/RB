
const Discord = require("discord.js");

const superagent = require("superagent");



module.exports.run = async (client,message,args) => {

	  if (message.channel.nsfw){

    var user = message.author.username

    let {body} = await superagent

    .get(`https://nekos.life/api/v2/img/bj`);

    message.channel.send(`${user} here a bj`, {file: body.url})

    }else message.channel.send("This is not a nsfw channel there for I can not send the requested image.")

}





module.exports.help = {

    name: "bj"

}