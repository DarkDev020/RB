//Start of bot
//Decare your packages
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms")
const client = new Discord.Client();

//Verfied 
const verfied = [`343586271257427968`];

client.on('ready', () => {

    console.log(`The bot ${client.user.tag} Is now online!`);
  
      client.user.setActivity(`in ${client.guilds.size} servers | !help | Discord.js| Shards:0`)
  
    });



// Create an event listener for new guild members

client.on('guildMemberAdd', member => {

    // Send the message to a designated channel on a server:
  
    const channel = member.guild.channels.find('name', 'member-log');
  
    // Do nothing if the channel wasn't found on this server
  
    if (!channel) return;
  
    // Send the message, mentioning the member
  
    channel.send(`Welcome to the server, ${member}`);
  
  });
//Start of Command Handler
var prefix = `!`;
client.on(`message`, async message =>{
    let args = message.content.slice(prefix.length).trim().split(` `);
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return
    if(!message.content.startsWith(prefix)) return;

    try{
        let ops = {
            verfied: verfied
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops);
    } catch(e) {
        console.log(e.stack);
    }
})

client.login('Put token here')
