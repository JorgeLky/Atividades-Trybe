const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
function wordLengths(arr){
  newArr = []
  for(i = 0; i < arr.length; i += 1){
    newArr.push(arr[i].length);
  }
  return(newArr);
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
