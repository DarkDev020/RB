const randomPuppy = require('random-puppy');

const Discord = require('discord.js');





exports.run = async (bot, message, args) => {

    var subreddits = [

        'NSFW_Wallpapers',

        'SexyWallpapers',

        'HighResNSFW',

        'nsfw_hd',

        'UHDnsfw'

    ]



    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];



    randomPuppy(sub)

        .then(url => {

    const pornembed = new Discord.RichEmbed()

        .setAuthor('4k', 'http://nsfwproject.com/wp-content/uploads/2018/05/cropped-NSFW3-1.png')

        .setColor('RED')

        .setDescription('ULTRA HD porn images.')

        .setFooter('Random pictures with 4k porn images', bot.user.avatarURL)

        .setImage(url)

    if(message.channel.nsfw) return message.channel.send(pornembed);





    var nsfwad = new Discord.RichEmbed()

        .setAuthor('NSFW', 'https://images.emojiterra.com/twitter/v11/512px/1f51e.png')

        .setDescription('Follow the information to continue !')

        .setImage(`https://i.imgur.com/oe4iK5i.gif`)

        .setColor('RED');

    if (!message.channel.nsfw) return message.channel.send(nsfwad);

    });

}