const greet = require('../exercise8')

//assert.equal(greet("John"), "Hi John")
//assert.equal(greet("John", "Good morning"), "Good morning John")
//assert.equal(greet("Isabela", "Oi"), "Oi Isabela")

test('greet function', () => {
  expect(greet('John', 'Good morning')).toEqual('Good morning John');
  expect(greet('John')).toEqual('Hi John');
  expect(greet('Isabela', 'Oi')).toEqual('Oi Isabela');
})