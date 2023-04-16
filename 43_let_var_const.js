// let keyword

let x = 10;

function arg(){
    {
    let x = 50;
    }
    console.log(`The x value inside the function :${x}`);
}
arg()

console.log(x);

// output:
// The x value inside the function :10
// 10


{var  a = 10;}
console.log(`The value of a is `,a);
// output:
// The value of a is  10
// output:
// console.log(`The value of a is `,a);
//                                  ^
// ReferenceError: a is not defined

// var  aa = 100;
// console.log(`The value of aa`,aa); // 10

// let aa =50;

// console.log(aa);



// var g= 'afa'
// function j(){
//     {var g = 5000;}
//     console.log(`The value of j is`,g);
// }
// j();

// console.log('outside th function ',g);



for (var i = 0; i < 5; i++) {
    (function (j){
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);

    
}
// output:
// 0
// 1
// 2
// 3
// 4

// output:
// The value of i is  5
// 5
// 5
// 5
// 5
// 5

// using let keyword 
for(let i = 0; i<5; i++){

    setTimeout(function(){
        console.log(`Using the let keyword: `,i);
    },1000);
}

// output
// Using the let keyword:  0
// Using the let keyword:  1
// Using the let keyword:  2
// Using the let keyword:  3
// Using the let keyword:  4


// hositing in javscript 

let  hoist  = 'I am hoisted value';
console.log('Hoisting',hoist);
// // output:
// console.log('Hoisting',hoist);
//                        ^

// ReferenceError: Cannot access 'hoist' before initialization

{
    let log = function (){
    console.log(message);
   }  

// console.log(message);
let message='TDZ';
log();
}

// output:
// Temporal death zone


let z =1121212122;
console.log(z);


// constant in javscript 

const NAME = 'Johhny depp';
// NAME = 'kkakfk'
console.log('constant',NAME);
// output:
// TypeError: Assignment to constant variable.


const USER_NAME = 'Johhny depp';
// const USER_NAME = 'kkakfk'
console.log('constant',USER_NAME);
// output:

// SyntaxError: Identifier 'USER_NAME' has already been declared

{
    var jj = 'kkllmflafalf';
}


console.log(jj);

// const pp ;
// output:
// SyntaxError: Missing initializer in const declaration



// constant with an object 

const USER_DATA = {
'name':'johnny depp',
'age':35
}

USER_DATA.age = 10012;
console.log(USER_DATA);

// output:
// { name: 'johnny depp', age: 10012 }

const CONTACT = Object.freeze({
    'number':123456
})


CONTACT.number = 7777777;

console.log(CONTACT);

// output:
// { number: 123456 }

const user_msg = Object.freeze({
    'name':'Jack Sparrow',
    'contact':{}
})

console.log(user_msg);
// output:
// { name: 'Jack Sparrow', contact: {} }
console.log(`Adding the new property to an object`);
user_msg.contact = 10;//prevent addition of property.
user_msg.contact.phone = 25501222222;
user_msg.contact.address = 'At post nashik';
console.log(user_msg);
// output:
// { name: 'Jack Sparrow', contact: {} }
// Adding the new property to an object
// {
//   name: 'Jack Sparrow',
//   contact: { phone: 25501222222, address: 'At post nashik' }
// }


// const with an array 
const contact = [1,2,3,4,5,5];
console.log(`Contact array`,contact);
contact.push('hi');
contact.push('hello');
console.log(`Contact array after pushing the value`,contact);

contact.pop();
contact.pop();
contact.pop();
contact.pop();
contact.pop();
contact.pop();
contact.pop();
contact.pop();
console.log(`Contact array after poping the value`,contact);
// output
// Contact array [ 1, 2, 3, 4, 5, 5 ]
// Contact array after pushing the value [ 1, 2, 3, 4, 5, 5, 'hi', 'hello' ]
// Contact array after poping the value []









