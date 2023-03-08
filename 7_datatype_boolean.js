// Boolean data type has two value true and false 

let isProgress = true;
let completed =false;
console.log('The type of completed is : ',typeof completed);

// output
// $ node 7_datatype_boolean.js
// The type of completed is :  boolean

// We use Boolean method to convert any data type value to boolean


var str = 'hello';
var str1 = ''
console.log(Boolean(str)); 
console.log(Boolean(str1));
// Output:
// true
// false

var num = 123;
var num1 =0;
console.log(Boolean(num));
console.log(Boolean(num1));
// output:
// true
// false

var obj = {name:'jonny',email:'psadgir111@gmail.com'}
var obj1 = {}
var obj2 = null;
console.log(Boolean(obj));
console.log(Boolean(obj1));
console.log(Boolean(obj2));
// output:
// true
// true
// false