const Discord = require("discord.js");

const prefix = "!"

let bot = new Discord.Client();

let client = new Discord.Client();

module.exports.run = async (bot, message, args) => {

  if(message.author.bot) return;

  message.reply(`Check you DM's :inbox_tray:`)

var embed = new Discord.RichEmbed()

.setAuthor(` | Commands`, `${bot.user.avatarURL}`)

.setTitle("Misc Commands")

.addField('say', '[Text]')

.addField('reverse','[Text]')

.setAuthor() .setTimestamp()

message.author.send(embed)



var embed = new Discord.RichEmbed()

.setAuthor(` | Commands`, `${bot.user.avatarURL}`)

.setColor("RANDOM")

.setTitle("Bot Owner/Devs")

.addField('restart', 'restarts bot')

message.author.send(embed)



var embed = new Discord.RichEmbed()

.setAuthor(` | Commands`, `${bot.user.avatarURL}`)

.setTitle("NSFW!")

.setColor("RANDOM")

.addField(`hentai`, `Sends a Hentai gif!`)

.addField(`4k`, `Sends a 4k NSFW Photo!`)

.addField(`fuck`, `Fuck Gif!`)

.addField(`ass`, `Sends a ass NSFW Photo!`)

.addField('boobs', 'boobpic')

.addField('spank', '!spank @mentioneduser ')

.addField('anal', 'shows anal sex')

.addField('Thigh', 'shows a pic of girls thighs')

.addField('foxgirl', 'shows a foxgirl')

.addField('porngif', 'Porngif is posted')

.addField('bj', 'blowjob')

.addField('cum', 'exactly how it sounds.')

.setTimestamp()

message.author.send(embed)



var embed = new Discord.RichEmbed()

.setAuthor(` | Commands`, `${bot.user.avatarURL}`)

.setTitle("FUN COMMANDS")

.setColor("RANDOM")

.addField(`gay`, `@user`)

.addField('8ball', 'magic 8ball')

.addField('yomama', 'yomama joke')

.addField('dadjoke', 'gets a dadjoke')

.addField('hug', 'hug a user')

.addField('memes', 'posts memes')

.addField('rps', 'rps')

.addField('ship @user @user')

.addField('coinflip', 'flip a coin')

.addField('avatar', 'generates avatar')

message.author.send(embed)



var embed = new Discord.RichEmbed()

.setAuthor(` | Commands`, `${bot.user.avatarURL}`)

.setTitle("HELPFUL COMMANDS")

.setColor("RANDOM")

.addField(`weather (location)`, `Sends weather infomation on the location!`)

.addField(`servers`, `All servers Leafeon is in!`)

.addField(`serverinfo`, `Server info about the server!`)

.addField(`support (Problem)-W.I.P`, `Gets you a support ticket that gets sent to a staff channel for the staff to sort out (Need a channel named staff_support_requests)`)

.addField('id', '@mentioneduser')

.addField('year', 'shows year info')

.addField('statistics')

.addField('findusers', 'finds a discord user')

.addField('contact', '[message]')

.addField('help', 'shows commands')

.addField('invite', 'posts bot invite and support server invite')

.addField('botinfo', 'shows bot info')

message.author.send(embed)



var embed = new Discord.RichEmbed()

.setAuthor(` | Commands`, `${bot.user.avatarURL}`)

.setTitle("Server Owner/Admin")

.setColor("RANDOM")

.addField(`hackban`, 'ban a user by id')

.addField('serverannouncement')

.addField('announce', 'make a announcement')

.addField('owner', 'server owner only for this. !owner @user- gives them server owner.')

message.author.send(embed)



var embed = new Discord.RichEmbed()

.setAuthor(` | Commands`, `${bot.user.avatarURL}`)

.setTitle("Moderation")

.setColor("RANDOM")

.addField(`ban (@mention) (Reason)`, `Manage Members permission needed also an incidents channel!`)

.addField(`mute (@mention || User ID)`, `Mute Members permission needed!`)

.addField(`unmute (@mention)`, `Mute Members permission needed!`)

.addField(`kick (@mention) (Reason)`, `Manage Members permission needed!`)

.addField('tempban (@mention) [REASON]')

.addField('addrole', '[Name]')

.addField('report', 'report a user to a admin')

.addField('warn', 'warn a user')

.addField('votekick', 'votekick a user')

.addField('autorole', 'autorole is W.I.P')

.addField('removerole', 'removes a role from a player')


message.author.send(embed)

  }

