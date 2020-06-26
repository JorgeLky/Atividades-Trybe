const swap = require('../exercise5')

const myList = [1, 2, 3]
const swappedList = swap(myList);

//assert.equal(swappedList[0], 3)
//assert.equal(swappedList[1], 2)
//assert.equal(swappedList[2], 1)

test('swap function', () => {
  expect(swappedList[0]).toBe(3);
  expect(swappedList[1]).toBe(2);
  expect(swappedList[2]).toBe(1);
})
