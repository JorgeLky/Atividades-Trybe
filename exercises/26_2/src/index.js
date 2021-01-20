const sum = require('./exercise1.js');
const readline = require('readline');

// exercise 1

function sumAndMultiply(a, b, c) {
  return new Promise ((resolve, reject) => {
    if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
      reject('digite apenas números')
    } else if (sum.sum(a, b, c) < 50) {
      reject('Valor muito baixo')
    }
    resolve(sum.sum(a, b, c))
  });
}

sumAndMultiply(10, 15, 20)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// exercise 2

async function results(a, b, c) {
  try {
    const result = await sumAndMultiply(a, b, c);
    console.log(result)
  } catch {
    const result = await sumAndMultiply(a, b, c);
    console.log(result)
  }
}

results(20, 20, 3);

// exercise 3

