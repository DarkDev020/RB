const Discord = require("discord.js")

const db = require("quick.db")



module.exports.run = async(bot, message, arg, arg1, arg2, arg3, color, prefix, config, ServerFile) => {



    const noperm = new Discord.RichEmbed()

        .setTitle(":x: ERROR :x:")

        .setColor(color)

        .setDescription("You don't have the permission to use the ``warn`` command!\nNeeded Permission: ``MANAGE_MESSAGES``")





    let args2 = message.content.split(" ").slice(2).join(' ')

    const warnusage = new Discord.RichEmbed()

        .setTitle("Warn Command")

        .setColor(color)

        .setDescription(`Usage of warn command: ${prefix}warn [@User] [Reason]\nExample: ${prefix}warn @Carlo Stop Spamming!`)



    if(!message.author.id === config.carloid) return message.channel.send(noperm)



    if(message.member.hasPermission("MANAGE_MESSAGES")) {

        let botme = message.guild.me

        if(message.mentions.users.size === 0) {

            if (botme.hasPermission("MANAGE_MESSAGES")) message.delete(1)

            message.channel.send(warnusage)

        } else {

            var mentioned = message.mentions.members.first();

            var mgm = message.guild.members.get(mentioned.id)

                if (args2) {

                    let oldwarns = await db.fetch(`Warns: ${mgm.name} | ${mgm.id}`, {target: "warns"})

                    db.set(`Warns: ${mgm.name} | ${mgm.id}`, {warns: oldwarns + 1})

                    let warns = await db.fetch(`Warns: ${mgm.name} | ${mgm.id}`, {target: "warns"})

                    const warnedargs = new Discord.RichEmbed()

                        .setColor(color)

                        .setTitle("Succes!")

                        .setDescription(`<@${mgm.user.id}> has been warned!\nReason: ${args2}\n\n<@${mgm.user.id}> has been warned for ${warns} time(s)`)

                        .setFooter(new Date())

                    const logwarnargs = new Discord.RichEmbed()

                        .setTitle("User Warned")

                        .setColor(color)

                        .addField("Warned User", `<@${mgm.id}> (${mgm.user.tag})`, true)

                        .addField("Moderator", `<@${message.author.id}>`, true)

                        .addField("Reason", `${args2}`)

                        .setFooter(new Date())

                    let logchannel = message.guild.channels.find("id", config.logchannel)

                    message.channel.send(warnedargs).then(m => m.delete(10000))

                    console.log("[Moderation] " + mgm.user.tag + " is warned by "+message.author.tag+" for: " + args2  + "")

                    logchannel.send(logwarnargs)

                } else {

                    message.channel.send(warnusage)

                }

        }

    } else {

        message.channel.send(noperm)

    }

}   



module.exports.help = {

    name: "warn"

}