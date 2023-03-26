
// let age = 1.8;
// let message;

// age>=18? message = 'Yes you can drive' : message = 'No you can not drive yet';
// console.log(message);
// // output:
// // No you can not drive yet


// using ternary operator in expression 
let age = 18;
let message;
message = age>=16? 'yes you can drive':'no you can not drive';
console.log(message);
// output:
// yes you can drive

// 
// multiple statement in ternary operator 
let auth = false
let id ;
let err ;
let nextUrl =  auth ? (console.log( `You can login successfully`),
 id = 212100) :( console.log(`Please login`),
 err = 'error : 420','welcome/javascript' );
 console.log(id);
 console.log(err)
 console.log(nextUrl);
//  output:
// yes you can drive
// Please login
// undefined
// error : 420
// welcome/javascript