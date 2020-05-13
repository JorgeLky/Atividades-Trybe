let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
    sum = (sum + numbers[i]);
    media = sum / numbers.length
}
console.log('a soma é ' + sum)
console.log('a média é ' + media)

