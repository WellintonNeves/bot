const Insta = require('./insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const port = 8080;
app.listen(port, () => {console.log(`Listening on http://localhost:${port}!`)});





/* var js = {
    "recipient":{
    "id":"<IGSID>"
    },
      "messaging_type": "RESPONSE",
      "message":{
      "text": "<SOME_TEXT>",
      "quick_replies":[
        {
          "content_type":"text",
          "title":"<TITLE_1>",
          "payload":"<POSTBACK_PAYLOAD_1>"
        },
        {
          "content_type":"text",
          "title":"<TITLE_2>",
          "payload":"<POSTBACK_PAYLOAD_2>"
        }
      ]
    } 
  } */


  client.on('connected', () => {
      console.log(`${client.user.username} Is Ready Now For Chats ${client.user.fullName}, ${client.user}`);
  });
  
  client.on('messageCreate', (message) => {
      if (message.author.id === client.user.id) return
      message.markSeen();
  
      if(message.content.toLowerCase().includes('hi')){ 
          console.log(js);
      } else
      chatbot(`https://node-red-yrbsr-2021-11-03.mybluemix.net/instagram?mensage=oi'&usuario=well`)
      .then(res => res.json())
      .then(json => {
  
          for (var i=0; i<json.length; i++) {
            message.chat.sendMessage(json[i].text || json[i].title);
              for (var key in json[i]) {
                console.log(json[i][key].length)
                console.log(json[i][key])
              if(json[i][key].length == 3){
                for (var j= 0; j<json[i][key].length; j++) {
                  message.chat.sendMessage(json[i][key][j].label)
                  console.log(json[i][key][j].label);
                  }
              
              }
              console.log(json[i][key]);
            }
          }
  
      }).catch(err => {});
  });
  
  client.login('well.four', 'ooqqewro');









/* const Insta = require('./insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;

client.on('connected', () => {
    console.log(`${client.user.username} Is Ready Now For Chats ${client.user.fullName}, ${client.user}`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();

    if(message.content.toLowerCase().includes('hi')){ 
        return message.chat.sendMessage('VENOM IS MY DEVELOPER CHECK OUT HIS CHANNEL :- https://youtube.com/c/VenomExE');
    } else
    chatbot(`https://node-red-yrbsr-2021-11-03.mybluemix.net/instagram?mensage=${message}'&usuario=${message.author.fullName}`)
    .then(res => res.json())
    .then(json => {

        for (var i=0; i<json.length; i++) {
          message.chat.sendMessage(json[i].text || json[i].title);
            for (var key in json[i]) {
              console.log(json[i][key].length)
              console.log(json[i][key])
            if(json[i][key].length == 3){
              for (var j= 0; j<json[i][key].length; j++) {
                message.chat.sendMessage(json[i][key][j].label)
                console.log(json[i][key][j].label);
                }
            
            }
            //console.log(json[i][key]);
          }
        }

    }).catch(err => {});
});

client.login('test_instabotw1506', 'ooqqewro');
 */