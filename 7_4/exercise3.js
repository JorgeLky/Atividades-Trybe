const assert = require('assert');
// escreva a função findTheNeedle para passar nos testes abaixo:
function findTheNeedle(arr, str){
  let count = 0;
  const nothing = -1;
  for(i = 0; i < arr.length; i += 1){
    if(arr[i] === str) {
      return(i)
    } else {
      count += 1;
    }
  }
  if (count === arr.length){
    return(nothing);
  }
}
//

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
