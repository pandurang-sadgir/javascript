// Javascript object 

// Common way to create obejct is object literal notaion {}

let firstObj = {};
console.log(firstObj);
console.log(`The type firstObj is : ${typeof(firstObj)}`);

// output :
// $ node 17_object.js
// {}
// The type firstObj is : object


// Create object with an properties

let person = {
    'firstName':'paddy',
    'lastName':'sadgir',
    'contact No':451221
}

// console.log(`The object is : ${person.firstName}`,person);
console.log(`The object is :` ,person);

// Note: value interpolation does not directly work on the object.




//  Accessing properties of an object

let user = {
    'firstName':'jonny',
    'lastName':'Depp',
    'contact No':9874561230,
    'phoneNo':1202151512
}
console.log(`The contact no of user is  : ${user["contact No"]}`);
console.log(`The user phone number is : ${user.phoneNo}`);

// if we are reading property which is not exist in obeejct then it will be undefined 
console.log(`Accessing the property which is not exist: ${user.address}`);


// Modifying the value of property in object


let user1 = {
    'firstName':'abc',
    'lastName':'xyz'
}

console.log(`The current value of object is :`,user1);

user1.firstName = 'shree hari';
user1.lastName = 'krishna';
console.log(`The value of object after change is :`,user1);

// Adding new property to an object
user1.age = 120;
user1.salary = 700000;

// Note: while accessing the property it should not be in string

console.log(`The object after adding property in`,user1);

// deleting property of an object.

console.log(`The object after deleting salary property `);

delete user1.salary;
console.log(user1);

// checking if property exist or not in object 
console.log(`is firstName property exist in object :`,'firstName' in user1);
console.log(`is firstName 2 property exist in object :`,'firstName2' in user1);

// output:
// Accessing the property which is not exist: undefined
// The current value of object is : { firstName: 'abc', lastName: 'xyz' }
// The value of object after change is : { firstName: 'shree hari', lastName: 'krishna' }
// The object after adding property in {
//   firstName: 'shree hari',
//   lastName: 'krishna',
//   age: 120,
//   salary: 700000
// }
// The object after deleting salary property
// { firstName: 'shree hari', lastName: 'krishna', age: 120 }
// is firstName property exist in object : true
// is firstName 2 property exist in object : false
