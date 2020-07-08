const exercise = require('../exercise1');

test('#randomNumber', () => {
  exercise.randomNumber = jest.fn().mockReturnValue(10);
  exercise.randomNumber();
  expect(exercise.randomNumber).toHaveBeenCalled();
  expect(exercise.randomNumber()).toBe(10);

  exercise.randomNumber = jest.fn().mockImplementation((a, b) => a/b);
  expect(exercise.randomNumber(10, 5)).toBe(2);
  exercise.randomNumber.mockReset();

  exercise.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  expect(exercise.randomNumber(2, 2, 2)).toBe(8);
  exercise.randomNumber.mockReset();

  exercise.randomNumber = jest.fn().mockImplementation(a => 2 * a);
  expect(exercise.randomNumber(5)).toBe(10);
  exercise.randomNumber.mockReset();
})

test('#upperWord', () => {
  exercise.upperWord = jest.fn().mockImplementation(string => string.toLowerCase());
  expect(exercise.upperWord('JORGE')).toBe('jorge');
  exercise.upperWord.mockReset();
})

test('#firstLetter', () => {
  
})