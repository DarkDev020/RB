const Discord = require('discord.js');
exports.run = (client, message, args, ops) => {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle(':small_red_triangle:  Please Select One... :small_red_triangle:')
.setDescription(`**The Current Prefix of the bot is !.
ASSISTANCE
1.help: Shows commands

2.invite : Sends invite link

3.id - gets users id

MODERATION COMMANDS
4.Ban: Bans a Player

5.Kick: Kicks a player

6.mute: Speak as RB

7.Purge: Deletes 1-100 messages, Example: !purge 5

8.warn: Vote on a problem or something. @here Vote [Text]

9.tempmute: warns a user

10.tempban: Exactly how it sounds.

11.removerole

12.unban- unbans a user: Example, !unban @grimreaper55death

13.addrole

FUN COMMANDS
14.8ball: Magic 8Ball!

15.say: Mutes a user

16.gay: Calculates a mentioned users gay percent.

17.Ship: Ships two mentioned users and calculates their percentage.

18.weather: shows weather for a state or city searched. Example: !weather San Fransisco 

19.Play: Plays MUsic but as few bugs still so not operationable

20.stop: Synced with music.

21.yomama

22.dadjoke

23.coinflip [Heads or Tails]

23.rps Rock,paper,Scissors shoot!

24.Avatar- Generates a user like avatar

INFO COMMANDS/Misc
25.report: Report stuff.

26.serverinfo

27.statistics

28.bug

29. Math

30.botinfo

31.findusers

32.whois

33.findusers - !findusers [Their User]

34.whois 

35. Contact [text]

BOT OWNER ONLY
36. Answer

37.restart

Server Owner
38.hackban

__NSFW__
39.hentaigif

40.porngif

41.anal

42.boobs

43.fuck

44.spank- also under girls nsfw

45.ass

46.bj

47.cum

48.thigh

49.dick

50.uniform

INFO:
Please join the support discord if you want to and feel free to ask question or report bugs.

**`) 
.setColor('RANDOM')
.setFooter('ReaperBot || Reaper Dev Team', client.user.displayAvatarURL, true)
.setTimestamp()
message.channel.send(embed)}