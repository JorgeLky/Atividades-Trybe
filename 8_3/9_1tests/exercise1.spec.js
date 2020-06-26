const rectangleArea = require('../exercise1');


const rectangle1 = [1, 2]
const rectangle2 = [3, 5]
const rectangle3 = [6, 9]
const rectangles = [rectangle1, rectangle2, rectangle3]

    


test('calculate rectangle area', () => {
    expect(rectangleArea(...rectangles)).toBe(rectangles[0]*rectangles[1]);
});
