const assert = require('assert');

function secondThirdSmallest(array) {
  let sortfunction = (a, b) => {return(a - b)};
  let newArray = array.sort(sortfunction);
  return([newArray[1], newArray[2]]);
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
/*
Use a variável parameter como parâmetro da função acima, escreva testes
para verificar se a mesma está retornando a como se vê na variável result
e, caso não esteja, altere o código para que ele passe nos testes.
Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
a função aos poucos:
*/

assert.deepStrictEqual(secondThirdSmallest(parameter), result);