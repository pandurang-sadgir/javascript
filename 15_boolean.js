// boolean primitive types
// It has two value true and false

// Declare and initialize the variable with two value

var done = true;
var unDone = false;
console.log('The variable type and value is: ',typeof (done),done);
console.log('The variable type and value is: ',typeof (done),unDone);

// $ node 15_boolean.js
// The variable type and value is:  boolean true
// The variable type is:  boolean false


// The boolean value are case sensitive true and false not equals to True and False

// var boolean = True;
// var boolean2 = False;
// console.log('The boolean ',boolean);
// output:
// ReferenceError: True is not defined


// To convert other type svalue to boolean we use Boolean();

// Boolean() methos
//  string 
//    any non empty string -->true
//    empty string -->false 

// number 
// any non zero number --> true 
// zero and NaN number -->false

// object
// any object -->true
// null -->false

// undefined 
// undefined --> false
 

// Boolean() method on string 

var str = 'hello';
var str1 = ' ';
var str3 = '';

console.log('The Boolean method returned value is with string : ',Boolean(str));
console.log('The Boolean method returned value is with empty space in string : ',Boolean(str1));
console.log('The Boolean method returned value is with empty string : ',Boolean(str3));

// Output
// The Boolean method returned value is with string :  true
// The Boolean method returned value is with empty space in string :  true
// The Boolean method returned value is with empty string :  false


//  if statement use Boolean method implicitly to get boolean value and run block of code accordingly

var hasError = true;
 hasError = false;
if(hasError) {
    console.log('Yes there is error');
}else {
    console.log('No error at all');
}
// output:
// No error at all



