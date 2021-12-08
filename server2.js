const Insta = require('./insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;

client.on('connected', () => {
    console.log(`${client.user.username} Is Ready Now For Chats`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();

    if(message.content.toLowerCase().includes('hi')){ 
        return message.chat.sendMessage(' ');
    } else
    chatbot(`https://node-red-yrbsr-2021-11-03.mybluemix.net/instagram?mensage=${message}&usuario=wellinton&session=5550`)
    .then(res => res.json())
    .then(json => {
      

      for (var i = 0; i < json.length; i++) {

        message.chat.sendMessage(json[i].text || json[i].title);
        console.log(json[i].text || json[i].title)

          for (var key in json[i]) {
            if (json[i][key].length == 3) {
              for (var j = 0; j < json[i][key].length; j++) {


                message.chat.sendMessage(json[i][key][j].label);
                console.log(json[i][key][j].label);

              }
            }
            if(json[i][key].length > 110 && json[i][key].includes('[') ){


              console.log("'''''''''[lista]'''''''''''''''")
              console.log(json[i][key])
              console.log(json[i][key].length + 'lista')
              console.log("'''''''''[lista]''''''''''''\n")


            } 
          }
        }
    }) .catch(err => {});
});

client.login('w_jr01', 'Wjr1506@');
