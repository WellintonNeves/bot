const express = require('express');
const app = express();
const addUrl = require('node-fetch').default
const bodyParser = require('body-parser');

// NodeJS bot

const Insta = require('./insta.js');
const client = new Insta.Client();

app.use(bodyParser.urlencoded({extended:true}))


client.on('connected', () => {
  console.log(`${client.user.username} Is Ready Now For Chats`);
});


client.on('messageCreate', (message) => {

  //visualizar mensagem

  if (message.author.id === client.user.id) return
  message.markSeen();

  //capturar mensagem via url

  addUrl(`https://node-red-yrbsr-2021-11-03.mybluemix.net/instagram?mensage=oi&usuario=we&session=${client.user}`)
  .then(res => res.json())
    .then(async json => {
    for (var i = 0; i < json.length; i++) {
      
    //enviar primeira remessa de mensagens
    console.log(json)
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
client.login('well.five', 'ooqqewro');

//end code


app.get('/', (req, res) =>{
  res.send('oi');
})

app.get('/pgt', (req, res) =>{
  msg = req.query.pergunta;
  res.send('pergunta?' + msg);
})

app.get('/msg/:tipo/:id', (req,res) =>{
  msg1 = req.params.tipo;
  msg2 = req.params.id;
  res.send("resposta:" + msg1)
})

app.post('/envio', (req, res) =>{
  console.log(req);
  const video = req.query.video
  const erro = req.query.erro
  const consultor = req.query.consultor
})



const port = process.env.PORT || 3000;
const localhost = "127.0.0.1";
app.listen(port, () => {console.log(`Listening on http://localhost:${port}!`)});