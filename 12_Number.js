// Javascript uses number to represent both the integer and float number. 

// To support different type of number javascript uses the different number literals

// 1.Integer Number

var intNumber = 98422;

// Note : when we use hex and octal number in arithmatic operation js treat them as decimal number.

var octalNumber1 = 0o12;
var octalNumber2 = 0o12;
console.log(octalNumber1); //it output 10;
console.log(octalNumber2); //it output 10;
var addTowOctal = octalNumber1 +octalNumber2;
console.log('The output of two ocatal number is ',addTowOctal);

// output:
// 10
// 10
// The output of two ocatal number is  20


// 2. Octal Number

// Octal digit is from 0 to 7

var octalNumber  = 071;
console.log('The console treat ocatal number as decimal',octalNumber);
// output:
// The console treat ocatal number as decimal 57

// javascript treat octal number as decimal when octal number contain digit out of its
// digits 0 to 7


let octalNum = 080;
console.log(octalNum);
// output
// 80;

//  Note : This implicit behaviour cause error due to this ES6-
// introduce new octal literal  0oNumber

// let octalNum1 = 0o80;
// console.log(octalNum1);

// Output:
// SyntaxError: Invalid or unexpected token


// Hexadecimal Number
// The Hexadecimal number is represnt with 0x or 0X


let num = 0x1a;
console.log(num);
// output
// 26


// Floating point number
var floatNumber = 11.66;
console.log(typeof floatNumber);
// output
// number

// Numeraic separator
// We use numeric separator  _ underscore to visually separate digit to improve readabalility

var number = 10_00_00_00_00;
console.log(number);
// output
// 1000000000




