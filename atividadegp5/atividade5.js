const express = require('express');
const middleware = require('./middleware');

const app = express();

app.use(middleware.validator);
app.get('/adicao/:numero1/:numero2', middleware.adicao, (req, res) => {
  req.status(200).send(req.total);
});

app.use(middleware.erro)

app.listen(3000, function() {
  console.log('ouvindo a porta 3000');
})