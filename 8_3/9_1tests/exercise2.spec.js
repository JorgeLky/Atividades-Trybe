const sum = require('../exercise2');


// assert.equal(sum(), 0)
// assert.equal(sum(1), 1)
// assert.equal(sum(1, 2), 3)
// assert.equal(sum(1, 2, 3), 6)
// assert.equal(sum(1, 2, 3, 4), 10)

test('sum of numbers', () => {
  expect(sum()).toBe(0);
  expect(sum(1)).toBe(1);
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2, 3)).toBe(6);
  expect(sum(1, 2, 3,)).toBe(6);
  expect(sum(1, 2, 3, 4)).toBe(10);
})