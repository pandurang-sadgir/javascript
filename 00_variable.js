// variable declaration
var userName;
console.log(userName);
console.log('Type of UserName variable is: ',typeof userName);

// Output:
// $ node 00_variable.js
// undefined
// Type of UserName variable is:  undefined

// Decalre and Initialize a variable
var rollNumber;
rollNumber = 49;
console.log(rollNumber);

// Output
// 49

// decalre and intialization of variable on same line

var a = 10;
console.log(a);
// output
// 10

//define multple variable on same line of statement

var b=20,c=30;
result = b+c;
console.log(result);
// output:
// 50

// javascript is loosely typed language

var messageInString = 'Hello JavaScript';
console.log('value in variable',messageInString);
console.log('But message is get changed');
messageInString = 123456;
console.log('after changing value',messageInString);
// output
// value in variable Hello JavaScript
// But message is get changed
// after changing value 123456

// undecalred variable

// console.log(undeclaredVariale);
// output
// ReferenceError: undeclaredVariale is not defined