const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const host = 'localhost';
const port = 3000;

app.use(bodyParser.json());

const server = http.createServer(app);

app.get('/', (_req, res) => {
  res.status(200).send('alou');
})

app.post('/', (req, res) => {
  const { name, age } = req.body;
  res.status(200).send(`hi ${name}, your age is ${ age }`);
})

server.listen(port, host, () => {
  console.log(`estamos online na porta ${port}`);
});

// comandos ultilizados: 
// get: curl http://localhost:3000
// post (com header): curl http://localhost:3000 -H "Content-type: application/json" -d '{ "name:" "Jorgin", "age:" }'