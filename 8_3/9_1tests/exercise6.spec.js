const toObject = require('../exercise6')

const palio = ["Palio", "Fiat", 2019]
const shelbyCobra = ["Shelby Cobra", "Ford", 1963]
const chiron = ["Chiron", "Bugatti", 2016]

//assert.deepEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 })
//assert.deepEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 })
//assert.deepEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 })

test('to Object function', () => {
  expect(toObject(palio)).toEqual({ name: 'Palio', brand: 'Fiat', year: 2019 });
  expect(toObject(shelbyCobra)).toEqual({ name: "Shelby Cobra", brand: "Ford", year: 1963 });
  expect(toObject(chiron)).toEqual({ name: "Chiron", brand: "Bugatti", year: 2016 });
})