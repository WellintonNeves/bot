const express = require('express');
const app = express();
const addUrl = require('node-fetch').default
const bodyParser = require('body-parser');

// NodeJS bot



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
app.listen(port, () => {console.log(`Listening on http://${localhost}:${port}!`)});