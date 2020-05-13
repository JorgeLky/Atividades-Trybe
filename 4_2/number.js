let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;
let maior = 0;
let impares = 0;

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum = (sum + numbers[i]);
    media = sum / numbers.length;
}

console.log('a soma é ' + sum)
console.log('a média é ' + media)

if (media > 20) {
    console.log("média maior que 20")
} else {
    console.log("média menor que 20")
}

for (n in numbers)
if (numbers[n] > maior) {
    maior = numbers[n]
}
console.log("o número maior é " + maior);

for (m = 0; m < numbers.length; m++) {
    if (numbers[m] % 2 !== 0){
        ++impares
    }
}
console.log("existem " + impares + " números ímpares");

