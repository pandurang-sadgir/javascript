// The exponentiation operator 
let num  = 2;
let expoent = 5;
let result = Math.pow(num,expoent);
console.log(result);
console.log(`Same operation using exponent operator`);
let result2 = num**expoent;
console.log(result2);
// output:
// 32
// Same operation using exponent operator
// 32


let x = 5;
x**= 5;
console.log(x);
// output
// 3125

// console.log(-2**4);
// error
console.log((-2)**4);
// 16

console.log(2n**5n);
// 32n

if(1){
    console.log(`IF block i executed`);
}