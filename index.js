const keepAlive = require("./server")
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
const dotenv = require('dotenv');
const TOKEN = ("Token You");
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

keepAlive()
client.login(TOKEN)
 
client.on('ready', () => {
  client.user.setActivity("Free", {type:
  "STREAMING", url: "https://www.twitch.tv/namestatus"})
   console.log(`${client.user.username} Successfully
    Logged inl`) 
}) 