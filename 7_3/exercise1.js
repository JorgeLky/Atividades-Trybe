const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// 1
assert.strictEqual(sum(4, 5), 9, 'please adjust');

// 2
assert.strictEqual(sum(0, 0), 0, 'please adjust');

// 3
assert.strictEqual(sum(4, '5'), 9, 'please adjdjust');

// 4
assert.throws(() => { sum(4, '5'), 'parameters must be numbers';});

