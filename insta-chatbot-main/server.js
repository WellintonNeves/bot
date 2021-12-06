const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch')
const bodyParser = require('body-parser');
const { json } = require('body-parser');
app.listen(port, () => {console.log(`Listening on http://localhos:${port}!`)});
// NodeJS




fetch('https://node-red-yrbsr-2021-11-03.mybluemix.net/instagram?mensage=oi&usuario=well')
    .then(res => res.json())
    .then(json => {

/*         json.forEach(json => {
            Object.entries(json).forEach(([key, value]) => {
              console.log(`${key} ${value}`);
              
            });
            console.log('-------------------');
          });
    }); */
        

    for (var i=0; i<json.length; i++) {
        
        for (var key in json[i]) {
                console.log(json[i][key])
            if(json[i][key].length == 3){
                for (var j= 0; j<json[i][key].length; j++) {
                console.log(json[i][key][j])
                }
            }
/*             for (var j= 0; j<json[i][key].length; j++) {
                console.log("======================")
                //console.log(json[i][key][j])
                console.log(json[i][key].length)
                console.log("======================")
            } */
        }
     }
    })
/*         for (var index = 0; index <= json.length; index++){
            var label = 0;
            if (label <= index){
                for(label; label < json.length; label++){
                    //console.log(json)
    
                    console.log(label+"label") //contador1
                    //console.log(json[index].text)
                    //labels
                }
            }

                console.log(index+"index1") //contador2
            //console.log(JSON.stringify(json[index]))

            //console.log(json[index].options.label)
            
            
            //console.log(JSON.stringify(json[index].text || json[index].title || json[index].options))
            
            //console.log(JSON.parse(json[index]))
        }
    }) */
 

/*     curl -X POST -H "Content-Type: application/json" -d '{
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
      }' "https://graph.facebook.com/v8.0/me/messages?access_token=<PAGE_ACCESS_TOKEN>" */