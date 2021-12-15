const express = require('express');
const app = express();
const port = 3000;
const addUrl = require('node-fetch').default
const bodyParser = require('body-parser');

// NodeJS
const Insta = require('./insta.js');
const client = new Insta.Client();

client.on('connected', () => {
  console.log(`${client.user.username} Is Ready Now For Chats`);
});


client.on('messageCreate', (message) => {

  //visualizar mensagem

  if (message.author.id === client.user.id) return
  message.markSeen();

  //capturar mensagem via url

  addUrl(`https://node-red-yrbsr-2021-11-03.mybluemix.net/instagram?mensage=${message}&usuario=${message.author.fullName}&session=${client.user}`)
  .then(res => res.json())
    .then(async json => {
    for (var i = 0; i < json.length; i++) {

    //enviar primeira remessa de mensagens

    await message.chat.sendMessage(json[i].text || json[i].title);
    console.log(json[i].text || json[i].title);

    for (var key in json[i]) {
      if (json[i][key].length == 3) {
        for (var j = 0; j < json[i][key].length; j++) {
            //enviar opções
            message.chat.sendMessage(json[i][key][j].label)
            console.log(json[i][key][j].label);
          }
        } 
      }
    }   
  })
})

app.get('/', (req, res) =>{
  res.send('oi');
})

app.get('/pgt', (req, res) =>{
  msg = req.query.pergunta;
  res.send('pergunta?' + msg);
})

app.get('/msg/:tipo', (req,res) =>{
  msg1 = req.params.tipo;
  res.send("resposta:" + msg1)
})


client.login('w_jr01', 'Wjr1506@');

app.listen(port, () => {console.log(`Listening on http://localhost:${port}!`)});