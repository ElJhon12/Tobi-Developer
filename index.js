const express = require('express')
const app = express()

app.get('/',function (req, res) {
  res.send('Tobi is Online!')
});

 let port = process.env.PORT || 3000;
 app.listen(port)
  
 require('dotenv').config()
 ///////////////////////////////////////////////////

const { Discord, Client } = require("discord.js");

const client = new Client;

client.on('ready', () => {

console.log('Tobi Is Online');

});

const OWNER = "817019120570466354";

//CONFIG
var prefix = process.env.PREFIX || "t.";

var token = process.env.TOKEN;

client.login(token);

//END CONFIGS

client.on('message', async (msg) => {
if (!msg.content.startsWith(prefix)) return;
if (msg.author.bot) return;

if (msg.channel.type === "dm") {
return;
}

if (!msg.guild) return;

const args = msg.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === 'test'){
  msg.reply('Working!');
}

});

//PD: Te tienes que crear un Archivo ".env" Y poner Lo siguiente: 
//TOKEN= //token del bot
//PREFIX= prefijo que quieres para tu bot
// Gracias por leer, en caso de que todavía te hayas extraviado puedes ir a: README.md
