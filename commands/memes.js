const Discord = require("discord.js");



module.exports.run = async (bot,message,args) => {



  let memes = [

        "https://i.redd.it/xqcfrp5ckk011.png",

        "https://i.redd.it/oprnilwu9l011.jpg",

        "https://i.redd.it/wxflh2iggk011.jpg",

        "https://i.redd.it/r8rnp322kl011.jpg",

        "https://i.redd.it/mthc6kx8uh011.jpg",

        "https://i.redd.it/y5c51jspwk011.jpg",

        "https://i.redd.it/xonpyck42l011.jpg",

        "https://i.imgur.com/voeUuSp.jpg",

        "https://i.redd.it/e6kxh4fyjl011.jpg",

        "https://i.redd.it/b6ubohyxoi011.jpg",

        "https://i.redd.it/axmyxu2njl011.jpg",

        "https://i.redd.it/2a7audpfnk011.png",

        "https://i.redd.it/rzyc8af2ri011.jpg",

        "https://i.redd.it/j61th15yqk011.jpg",

        "https://i.redd.it/jrgtnwaook011.jpg",

        "https://i.redd.it/b0vye02vxl011.jpg",

        "https://i.redd.it/9l3hkoo42j011.jpg",

        "https://i.redd.it/rbpu3iqr2k011.jpg",

        "https://i.redd.it/4hdj6dormk011.jpg",

        "https://i.redd.it/iss0nksjlg011.png",

        "https://i.redd.it/5hpwgz664h011.png",

        "https://i.redd.it/pjlbnr4j4l011.jpg",

        "https://i.redd.it/20ue2h370m011.jpg",

        "https://i.redd.it/djqk1r8pwl011.jpg",

        "https://i.redd.it/mv0y6qy28m011.jpg",

        "https://i.redd.it/7b1cs4l28m011.jpg",

        "https://i.redd.it/3jmg5093dm011.jpg",

        "https://i.imgur.com/tunbghc.jpg",

        "https://i.redd.it/tlz6bbnypk011.jpg",

        "https://i.redd.it/h9q906vf8l011.jpg",

        "https://i.redd.it/rnb1qktj6j011.jpg",

        "https://i.redd.it/wcmqnwwj7j011.jpg",

        "https://i.imgur.com/ptO9EgR.jpg",

        "https://i.redd.it/srmuinba8m011.jpg",

        "https://i.redd.it/o2nusxu2pl011.jpg",

        "https://i.redd.it/xahi2dubhm011.jpg",

        "https://i.redd.it/ofzctwamzl011.png",

        "https://i.redd.it/je9jwk7ddl011.jpg",

        "https://i.redd.it/z5du42wdlm011.jpg",

        "https://i.redd.it/jkgiwus1pm011.png",

        "https://i.redd.it/tovbhge6yl011.jpg",

        "https://i.redd.it/2e8qhbyyek011.jpg",

        "https://i.redd.it/7b1fpwtenm011.jpg",

        "https://i.redd.it/wkdbosxk2k011.jpg",

        "https://i.redd.it/foj0sz6ewj011.jpg",

        "https://i.redd.it/avarsj1dri011.jpg",

        "https://i.redd.it/81lmsm5tag011.jpg",

        "https://i.redd.it/4osoxjzv7g011.jpg",

        "https://i.redd.it/f14he3uaam011.jpg",

        "https://i.redd.it/ojivkaqtpm011.jpg",

        "https://i.imgur.com/3CbHCYy.jpg",

        "https://i.redd.it/skao5oc6uh011.jpg",

        "https://i.redd.it/v91sdbwnpm011.jpg",

        "https://i.redd.it/fjnhsmoqqm011.jpg",

        "https://i.redd.it/22wumuewih011.png",

        "https://i.redd.it/votxv1sanm011.jpg",

        "https://i.redd.it/7l5awvytsm011.jpg",

        "https://i.redd.it/2ee24i453m011.jpg",

        "https://i.redd.it/81ytw2rntg011.png",

        "https://i.redd.it/qeh8u0pwti011.png",

        "https://i.redd.it/qr37o95ink011.png",

        "https://i.imgur.com/AgBtp0J.jpg",

        "https://i.imgur.com/MsdOKfH.jpg",

        "https://i.redd.it/fjogonfxam011.jpg",

        "https://i.redd.it/bi119xzxem011.jpg",

        "https://i.redd.it/21cjas4ljm011.jpg",

        "https://i.redd.it/urkf6opiqk011.png",

        "https://i.redd.it/a3u31zaivl011.png",

        "https://i.redd.it/5qk489qwfh011.jpg",

        "https://i.redd.it/36jfzc6s5m011.jpg",

        "https://i.redd.it/uxvxv58dbj011.jpg",

        "https://i.redd.it/myabiul6xl011.jpg",

        "https://i.redd.it/n98gusxp2h011.jpg",

        "https://i.redd.it/fmec6y0gsk011.jpg",

        "https://i.redd.it/k848un4oam011.jpg",

        "https://i.imgur.com/zoiEM3J.jpg",

        "https://i.redd.it/zmzh5tznai011.png",

        "https://i.redd.it/y03xvzsy0l011.jpg",

        "https://i.redd.it/x85ops8w2h011.jpg",

        "https://i.imgur.com/VU8ZD8m.jpg",

        "https://i.redd.it/qlw7eli2kh011.jpg",

        "https://i.redd.it/t7o6fc4sdm011.jpg",

        "https://i.redd.it/jleo6wr6um011.jpg",

        "https://i.redd.it/bay6g9mrvi011.jpg",

        "https://i.redd.it/ttxvomunng011.jpg",

        "https://i.redd.it/h5dgt1xz2m011.jpg",

        "https://i.redd.it/s1v3gszncj011.jpg",

        "https://i.redd.it/4o5ogua0pm011.jpg",

        "https://i.redd.it/cj53rquh5j011.jpg",

        "https://i.redd.it/gvd4ednwyj011.png",

        "https://i.redd.it/o59zvdjjug011.jpg",

        "https://i.redd.it/9lpbfpunif011.jpg",

        "https://i.redd.it/mdhmpw2kkk011.jpg",

        "https://i.redd.it/cxbe2jxwlk011.png",

        "https://i.redd.it/th64b2myhf011.jpg",

        "https://i.redd.it/kuqzrbt5ag011.jpg",

        "https://i.redd.it/bxwefwk3pj011.jpg",

        "https://i.redd.it/wgnsdrmevl011.png",

        "https://i.imgur.com/Qw8shcm.jpg",

        "https://i.redd.it/zv7d73ujkf011.png",

        "https://i.imgur.com/C0HR0wL.jpg",

        "https://i.redd.it/0vglz1jtbg011.jpg",

        "https://i.redd.it/0sjcx1gbym011.jpg",

        "https://i.redd.it/g2nnax9nxm011.jpg",

        "https://i.redd.it/n7ghq6mjyd011.jpg",

        "https://i.imgur.com/Feo9GYt.png",

        "https://i.redd.it/w94g9nd8gm011.jpg",

        "https://i.redd.it/2pd6xajh1m011.jpg",

        "https://i.redd.it/4svppxeede011.jpg",

        "https://i.redd.it/wtovo48qjg011.jpg",

        "https://i.imgur.com/gIHUKMT.jpg",

        "https://i.redd.it/p0xc4nmp0m011.jpg",

        "https://i.redd.it/kfz3ds2w2n011.jpg",

        "https://i.imgur.com/wh8gCVz.png",

        "https://i.redd.it/kly7d5xmvg011.jpg",

        "https://i.redd.it/iun3o9b95m011.jpg",

        "https://i.redd.it/n9lqdja1di011.jpg",

        "https://i.redd.it/hcdz83fqhe011.jpg",

        "https://i.redd.it/ek80hsz7th011.jpg",

        "https://i.redd.it/9745t7egxe011.jpg",

        "https://i.redd.it/qsas897zjm011.jpg",

        "https://i.redd.it/8ua04yhvjm011.jpg",

        "https://i.redd.it/z2x278gjwk011.png",

        "https://i.redd.it/rlm67wjv8j011.jpg",

        "https://i.redd.it/i9h0dzg21n011.png",

        "https://i.redd.it/p60mgn6cji011.jpg",

        "https://i.redd.it/qcxoxk865h011.jpg",

        "https://i.redd.it/dj1xnxe3um011.jpg",

        "https://i.redd.it/3be7tl648o011.jpg",

        "https://i.redd.it/31ikbxgz2u011.jpg",

        "https://i.redd.it/5csy35grjp011.jpg",

        "https://i.redd.it/ioztr6ggro011.jpg",

        "https://i.redd.it/v983vnz4yo011.png",

        "https://i.redd.it/uco2xhmmzt011.jpg",

        "https://i.imgur.com/VaH6hts.jpg",

        "https://i.redd.it/wqz2z4w7sm011.jpg",

        "https://i.redd.it/fvus3dup8o011.jpg",

        "https://i.redd.it/qioxhu9jtn011.jpg",

        "https://i.redd.it/2iu9jcup5o011.jpg",

        "https://i.redd.it/9bdykl1oop011.jpg",

        "https://i.redd.it/92g4v8zmkp011.jpg",

        "https://i.redd.it/ei6a3mz9lo011.jpg",

        "https://i.redd.it/7akp4vybio011.jpg",

        "https://i.redd.it/d0ryoo3fko011.png",

        "https://i.redd.it/cfbxnzyn0o011.jpg",

        "https://i.redd.it/sc0jthqk0o011.jpg",

        "https://i.redd.it/hacbd6jg7o011.jpg",

        "https://i.redd.it/3fe0jweuwn011.png",

        "https://i.redd.it/iyc5zglkwo011.png",

        "https://i.redd.it/d46a5shuap011.jpg",

        "https://i.redd.it/vratucc3ro011.jpg",

        "https://i.imgur.com/83Z8OeI.jpg",

        "https://i.redd.it/9d7c59riqn011.jpg",

        "https://i.redd.it/v53ot93bgp011.png",

        "https://i.redd.it/unhz6nwecn011.png",

        "https://i.redd.it/w1tjw2ljwn011.jpg",

        "https://i.redd.it/y9vbuwp1wj011.jpg",

        "https://i.redd.it/yvx37eaunl011.jpg",

        "https://i.redd.it/qgv97spcxf011.jpg",

        "https://i.redd.it/qxp6xxcqhi011.jpg",

        "https://i.imgur.com/BonuDfe.jpg",

        "https://i.imgur.com/h1OU6ZQ.jpg",

        "https://i.redd.it/bj5sod4pvg011.jpg",

        "https://i.redd.it/5qurkrf10e011.png",

        "https://i.redd.it/5uuoodj8am011.png",

        "https://i.redd.it/c2y4mlc7cg011.jpg",

        "https://i.redd.it/6lhezs8jyk011.png",

        "https://i.imgur.com/MxUF69Q.jpg",

        "https://i.redd.it/xqnwtf73sl011.jpg",

        "https://i.redd.it/6mnqzpz8ri011.jpg",

  ];

  let choose = Math.floor((Math.random() * memes.length));



  let meme = new Discord.RichEmbed()

  .setAuthor("Meme")

  .setImage(memes[choose])

  .setFooter(`Requested by ${message.member.user.tag} at ${message.createdAt.toDateString()}`);



  message.channel.send(meme);

}



module.exports.help = {

  name: "meme"

}