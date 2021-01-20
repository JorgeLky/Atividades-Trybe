const express = require('express');
const bodyParser = require('body-parser');
const { appRouter } = require('./controllers/plants');
const app = express()
app.use(bodyParser.json());

app.use(appRouter);

app.listen(3001, () => {
  console.log('online...')
})