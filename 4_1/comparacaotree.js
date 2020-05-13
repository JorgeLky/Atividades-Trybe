let num1 = 100;
let num2 = 40;
let num3 = 101;

if (num1 > (num2 && num3)) {
    console.log(num1);
} else if (num2 > (num1 && num3)) {
    console.log(num2);
} else if (num3 > (num1 && num2)) {
    console.log(num3)
} else {console.log('not a number')};
