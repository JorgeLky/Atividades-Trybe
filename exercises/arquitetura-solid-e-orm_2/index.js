const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./controllers/BooksController');

const app = express();
app.use(bodyParser.json());

app.use(booksRouter);

app.listen(3000, () => {
  console.log('Fon!')
})