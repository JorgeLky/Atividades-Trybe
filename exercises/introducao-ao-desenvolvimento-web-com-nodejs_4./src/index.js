const express = require('express');
const app = express();

app.get("/ping", function (req, res) {
  res.send({"message": "Pong!"});
})

app.listen(3000, function () {
  console.log('escutando a porta 3000');
})