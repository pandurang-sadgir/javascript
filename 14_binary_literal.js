// In ES5 javascript does not provide any literal to reprent binary number 
// to represent binary number we use parseInt(binary,2):return decimal;

var binaryToDecimal = parseInt(1111,2);
console.log(binaryToDecimal);
// output:
// 15
// From an ES6 we hava literal to represent binary number 0b(0-1);

var binaryNumber = 0b1111;
console.log('The binary number is ',binaryNumber);
// output:
// The binary number is  15