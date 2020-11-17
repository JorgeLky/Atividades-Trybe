const express = require('express');
const app = express();

app.post('/hello', function (req, res) {
  req.send("hello!");
});

app.listen(3000, function() {
  console.log('ouvindo a porta 3000');
})