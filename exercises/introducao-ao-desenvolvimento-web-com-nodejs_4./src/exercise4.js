const express = require('express');
const app = express();

app.post('/hello', function (req, res, err, next) {
  const age = parseInt(req.query.age);
  if (age < 17) {
    return next(err);
  } else {
    next();
  }
});

app.use('/hello', function (req, res) {
  const age = req.query.age;
  const name = req.query.name;

  res.status(200).json({name: `${name}`, age: `${age}`})
})

app.use(function (err, req, res, next) {
  err.status(401).json({message: "Unauthorized"})
})

app.listen(3000, function() {
  console.log('ouvindo a porta 3000');
})