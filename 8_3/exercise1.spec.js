const rectangleArea = require('./exercise1');

test('calculate rectangle area', () => {
    expect(rectangleArea(...rectangle)).toBe(rectangle[0]*rectangle[1]);
});


