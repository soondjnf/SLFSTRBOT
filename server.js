const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === '477397483904040995') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`بوت اداري ، عام يحتوي على كل شي 
هو البوت المناسب للادارة السيرفرات 

-بوت يغنيك عن اي بوت اخر 
-سريع بالكامل 
-بوت يعمل على مدار الساعه 
-لايوجد به اي مشاكل
-تحديث وتطوير البوت مستمر بإذن الله

رابط ألبوت
https://discordapp.com/oauth2/authorize?client_id=474733285440749570&permissions=8&scope=bot

رابط الدعم الفني 
https://discord.gg/Hynfcdc `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.login(process.env.BOT_TOKEN);
