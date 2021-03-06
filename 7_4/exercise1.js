const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:

function addOne(arr){
  let newArr = [];
  for (i = 0; i < arr.length; i ++){
    newArr.push(arr[i] + 1);
  }
  return(newArr);
}

//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
