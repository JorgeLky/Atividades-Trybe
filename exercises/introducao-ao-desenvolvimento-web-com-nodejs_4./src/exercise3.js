const express = require('express');
const app = express();

app.get('/hello', function (req, res, next){
  const name = req.query.name;
  res.status(200).json({"message": `Hello ${name}`});
})

app.listen(3000, function () {
  console.log('ouvindo a porta 3000')
})