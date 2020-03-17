const Discord = require('discord.js');
const bot = new Discord.Client()

var prefix = ('+') 

bot.on('ready', function () {
    console.log("Bot Connecté")
    bot.user.setActivity(`servir le serveur [⭐ 𝕱riends ⭐]`)
  })

// Commandes Random
bot.on("message", (message) => {
    if (message.content.startsWith(prefix + "choice")) {
      let args = message.content.slice(prefix.length).split(/ +/g);
      if (!args[1]) return message.channel.send("𝓥euillez entrer 2 options!")
      if (!args[2]) return message.channel.send("𝓥euillez entrer une 2ème option!")
        let answers = [ args[1] + " :red_circle:", args[2] + " :blue_circle:"]
        let embed = new Discord.RichEmbed()
          .setAuthor("")
          .setThumbnail(`${message.author.avatarURL}`)
          .addField("**" + `${message.author.username}` + "**, j'ai choisi: " + answers[Math.floor(Math.random() * answers.length)], "Powered by Daimyo")
          .setColor("ORANGE")
      message.channel.send(embed)
      }
    if (message.content.startsWith(prefix + "pileface")) {
      let pile = "Pile :red_circle:"
      let face = "Face :blue_circle:"
      let answers = [pile,face,face,face]
      let embed = new Discord.RichEmbed()
        .setAuthor("")
        .setThumbnail(`${message.author.avatarURL}`)
        .addField("**" + `${message.author.username}` + "**, j'ai choisi: " + answers[Math.floor(Math.random() * answers.length)], "Powered by Daimyo")
        .setColor("ORANGE")
      message.channel.send(embed)
      }
    if (message.content.startsWith(prefix + "roll")) {
      let args = message.content.slice(prefix.length).split(/ +/g);
      if (!args[1]) return message.channel.send("𝓥euillez entrer un nombre max!")
      var result = Math.floor((Math.random() * args[1]) + 1);
      message.channel.send("**" + `${message.author}` + "**, tu as roll: " + result)
      } 
});

// Commandes Fun
bot.on("message", (message) => {
    if (message.content.startsWith(prefix + "hentai")) {
    var member = message.mentions.members.first()
    if (!member) return message.channel.send("𝓥euillez mentionner quelqu'un!")
    let awnsers = ["https://www.rencontresanslendemain.net/wp-content/uploads/2018/02/sexe-debout-gif-hentai.gif","https://www.rencontresanslendemain.net/wp-content/uploads/2018/02/hentai-gif.gif","https://media2.giphy.com/media/3o7btLEJVwFu3lei9a/source.gif","http://caline82.c.a.pic.centerblog.net/lp-animated-hentai-gif-13.gif","https://www.rencontresanslendemain.net/wp-content/uploads/2018/02/gif-sexe-hentai.gif"]
    message.channel.send(`${message.author}` + " et " + `${member.user} font du sale :underage: ` + '\n' + awnsers[Math.floor(Math.random() * awnsers.length)])
      }
    if (message.content.startsWith(prefix + "kiss")) {
    var member = message.mentions.members.first()
    if (!member) return message.channel.send("𝓥euillez mentionner quelqu'un!")
    let awnsers = ["https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865","https://data.whicdn.com/images/215314728/original.gif","https://media1.tenor.com/images/7fd98defeb5fd901afe6ace0dffce96e/tenor.gif?itemid=9670722","https://media2.giphy.com/media/zkppEMFvRX5FC/giphy.gif","https://thumbs.gfycat.com/FrighteningGiddyGerbil-small.gif"]
    message.channel.send(`${message.author}` + " embrasse " + `${member.user}~ :heart: ` + '\n' + awnsers[Math.floor(Math.random() * awnsers.length)])
      }
    if (message.content.startsWith(prefix + "slap")) {
    var member = message.mentions.members.first()
    if (!member) return message.channel.send("𝓥euillez mentionner quelqu'un!")
    let awnsers = ["https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif","https://media3.giphy.com/media/10Am8idu3qBYRy/source.gif","https://media1.tenor.com/images/85722c3e51d390e11a0493696f32fb69/tenor.gif?itemid=5463215","https://media1.giphy.com/media/iUgoB9zOO0QkU/source.gif","https://66.media.tumblr.com/00af342d3838fed0f978b62ff496dfea/tumblr_phizajqDcb1wj1nn0o1_400.gif"]
    message.channel.send(`${message.author}` + " gifle " + `${member.user}! ` + '\n' + awnsers[Math.floor(Math.random() * awnsers.length)])
      }
    if (message.content.startsWith(prefix + "hug")) {
    var member = message.mentions.members.first()
    if (!member) return message.channel.send("𝓥euillez mentionner quelqu'un!")
    let awnsers = ["https://media.tenor.com/images/9fe95432f2d10d7de2e279d5c10b9b51/tenor.gif","https://66.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_400.gif","https://media3.giphy.com/media/l2QDM9Jnim1YVILXa/source.gif","https://media1.tenor.com/images/2e167ff6634636c27c3dbd6a33ae6c84/tenor.gif?itemid=12668686","https://media0.giphy.com/media/HaC1WdpkL3W00/giphy.gif"]
    message.channel.send(`${message.author}` + " câline " + `${member.user} ` + '\n' + awnsers[Math.floor(Math.random() * awnsers.length)])
      }
    if (message.content.startsWith(prefix + "jojo")) {
    var member = message.mentions.members.first()
    if (!member) return message.channel.send("𝓥euillez mentionner quelqu'un!")
    let awnsers = [`${message.author}` + " ORAORAORA LA GUEULE DE " + `${member.user} ` + '\n' + "https://thumbs.gfycat.com/PastelWateryIrishsetter-small.gif" , `${message.author}` + " MUDAMUDAMUDA LA GUEULE DE " + `${member.user} ` + '\n' + "https://i.imgur.com/oNcHdPX.gif"]
    message.channel.send(awnsers[Math.floor(Math.random() * awnsers.length)])
      }
});

// Commandes Embed
bot.on("message", (message) => {
    if (message.content.startsWith(prefix + "help")) {
        message.channel.send("**__Les commandes aux quelles je peux répondre!__**" + '\n' + "*__Commandes Diverses:__* +infoplayer" + '\n' + "*__Commandes de Random:__* +choice / +pileface / +roll" + '\n' + "*__Commandes Fun:__* +hentai / +kiss / +slap / +hug / +jojo")
      }
});

// Entrez votre Token ici:
bot.login('NjE4MTYyNDYzNzI0MjczNjg2.XnDSmQ.kY2yS_U04IkpH03qRffGs79a2cY')
