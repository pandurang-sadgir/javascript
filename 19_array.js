// Array in javascript 
// Array is colloection of element, the elements specified with an index number ,due to this array is order list of elements

// creating  javascript array 

// There are two  way to create array. 
// 1. array constructor new Array(). 
// 2. array literal. []

// creating empty array 

let emptyArray = [];


// Creating array 

let colors = ['red','green','blue','orange'];
console.log(colors);

// output
// [ 'red', 'green', 'blue', 'orange' ]


// accessing the array elements

let days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

let firstDay = days[0];
console.log(`The first element of an array is :   ${firstDay}`);

// output
// The first element of an array is :   undefined


// chanage the value of array


let numbers = [9,8,7,6];
console.log(`The original array is : ${numbers}`);

numbers[0] = 10;
console.log(`The array after value change is : ${numbers}`);

// output:
// The original array is : 9,8,7,6
// The array after value change is : 10,8,7,6


// Gettign array size 


let letters = ['a','b','g','d','x','c','v','b','m'];
console.log('The array size is',letters.length);

// output:
// The array size is 9


// basic operation of an array 

// adding element at the end of an array 

// push(numebr of elements):length

let items = ['1','2','3','4'];
console.log(`The array before adding elements:  ${items}`);
let a= items.push(5,6,7);
console.log(`The array after adding elements:  ${items}`);

// output:
// The array before adding elements:  1,2,3,4
// The array after adding elements:  1,2,3,4,5,6,7

// Adding elements at the beginning of an array 


let counts = [2,3,4,5,6,7,8,9,10];
console.log(`The original array is : ${counts}`);
counts.unshift(0,1);
console.log(`The array after inserting elemets is: ${counts}`);

// output:
// The original array is : 2,3,4,5,6,7,8,9,10
// The array after inserting elemets is: 0,1,2,3,4,5,6,7,8,9,10


// Remove the element from the end of an array 

let counters = [1,2,3,4,5,6,7,8,9,10,11];
console.log(`The array before removing elements: ${counters}`);
let removedElement = counters.pop();
console.log(`The removed elements is: ${removedElement} `);
console.log(`The array after removing element is: ${counters}`);

// output:
// The array before removing elements: 1,2,3,4,5,6,7,8,9,10,11
// The removed elements is: 11
// The array after removing element is: 1,2,3,4,5,6,7,8,9,10



// Removing element from the beginning of an array

let arrayOfElement = [1,2,3,4,5,6,7,8,9,];
console.log(`The array before removing element is ${arrayOfElement}`);
let removeFirstElement = arrayOfElement.shift();
console.log(`The removed element is ${removeFirstElement}`);
console.log(`The array after removing element is ${arrayOfElement}`);
// output:
// The array before removing element is 1,2,3,4,5,6,7,8,9
// The removed element is 1
// The array after removing element is 2,3,4,5,6,7,8,9


// Finding the index of an element 


let findIndexOfarray = [1,2,3,4,5,6,7,8,9,10];

let indexIs = findIndexOfarray.indexOf(10);
console.log(`The total element of array is : ${findIndexOfarray}`);
console.log(`The index of element 10 is :${indexIs} `);
// output:
// The total element of array is : 1,2,3,4,5,6,7,8,9,10
// The index of element 10 is :9


// To check if array is exist or not 

console.log(Array.isArray(findIndexOfarray));
// output:
// true