const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui

// 1
assert.strictEqual(mySum([1, 2, 3, 4]), 10);

// 2
assert.strictEqual(mySum([1, -2, -3, 4]), 0);