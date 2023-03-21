// Arithmatic operator 

// 1. addition operator (+)

// adding two numeric value 
let sum = 10 + 20 + 20 + 100;
console.log(sum)
// output:
// 150


// adding the numeric value through variables

let a = 255;
let b = 5;
let add = a+b; 
console.log(add);

// output
// 260

// if operand contain both  values are string.


let c = 'hello';
let d = 'javascript';

let add1 = c + d;
console.log(add1);

// output:
// hellojavascript

// if operand contain either value is string

let e = 'ten';
let f = 10;
let add2 = e + f;
console.log(add2);
console.log(typeof add2);

// output:
// ten10
// string


// Addtion of two undefined value;

let g;
let h;
let add3=g+h;
console.log(add3);
// output:
// NaN


// --------------subtraction operator---------------

let sa = 30;
let sb= 40;
let sResult =  sa-sb;
console.log(`The result of subtraction is ${sResult}`);
// output:
// The result of subtraction is -10


// Substracting multiple value 
console.log(10-522-45-72-54-115);
// output
// -798

// substracting string 

console.log('faf'-10);
// output:
// NaN


// substracting two string 
console.log('abcd'-'bcde');
// output:
// NaN

// substracting two undefined

console.log(undefined-undefined);
// output:
// NaN


// even after conversion it will return NaN
console.log(Number(undefined)-Number(undefined));
// output:
// NaN



// Substractin boolean value 
console.log(false-false)
// output
// 0


// always remember true=1,false=0



// When string contain number then Number() method convert it into number
console.log('100'-5);
// output:
// 95

// ---------------------Multiplication operator ---------------------

// multiplication of two number 

let ma = 10;
let mb = 20;
let mresult = ma*mb;
console.log(mresult);
// output:
// 200



// multiplication of null 
console.log(null*null);
// output:
// 0

// null is equals to 0 in numeric opeartion 

// multiplication of string
console.log('a'*'b') ;
// output:
// NaN


// Either numeric value is string in multiplication

console.log('20'*9);
// output
// 180

// multiplication of undefine value 
console.log(undefined*undefined);
// output:
// NaN

// Multiplication of null value 
console.log(null*null);
// output:
// 0

// Multiplication of null and undefined;
// console.log(null*undefined);
// NaN




// -------------------Division---------------------

// Division of two number 

let da = 20;
let db = 10;

let dResult= da/db;
console.log(dResult);
// output:
// 2

// Division of number if either one is string 

console.log('100'/2);
// output:
// 50

// Note:
// Number() method work on only Sub,mul,div operation except add.






















