
const express = require('express');
const app = express();

app.post('/hello', function (req, res) {
  const name = req.query.name;

  res.status(200).json({message: `Hello ${name}`});
});

app.listen(3000, function () {
  console.log("ouvindo a porta 3000");
});