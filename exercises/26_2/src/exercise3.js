const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('qual o nome do arquivo ?', nomeArquivo => {
  return new Promise ((resolve, reject) => {
    fs.readFile(nomeArquivo, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    })
  }).then((data) => {
    console.log(data);
    rl.close();
  })
  .catch((erro) => {
    console.log(`não foi possível encontrar o arquivo: ${erro}`);
    rl.close();
  });
})