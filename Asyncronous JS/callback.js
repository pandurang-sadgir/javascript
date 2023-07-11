
// 1.// function userName(callback){
//     callback()
//     console.log('first message');
// }

// function callback(){
//     console.log('second message');
// }

// userName(callback);
// // output:
// // second message
// // first message
// // Note:In this example callback functionexecuted first


// 2
// create function which return odd number from an array 

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// function filterArray(arr){
//  let oddNumber = [];
//     for (const number of numbers) {
//     if(number %2 !== 0){
//         oddNumber.push(number);
//     }
// }

// return oddNumber;
//  }
    


// const oddNumber  = filterArray(numbers);
// console.log(oddNumber);

// output
// [ 1, 3, 5, 7, 9 ]

// Note: But in this example there is problem. The problem is when we when we want even number from the function then we have to change entire code of main (outer /higher order function) this is not efficient .
// The solution is extract main logic inside another function and pass that function as argument to main function.
// The passed function is known as callBack Function.
// Call back function make our main function generic and reusable.


let numbers = [1,2,3,4,5,6,7,8,9,10];

function oddNumber(number){
    return number % 2 !==0;//This return boolean value

}

function evenNumber(number){
    // console.log('Even numbers');
    return number % 2 === 0;
}

function filterArray(arr,callBack){
 let result = [];
    for (const number of arr) {
    if(callBack(number)){
        result.push(number);
    }
}

    return result;
 }
    
const odd  = filterArray(numbers,oddNumber);
const even  = filterArray(numbers,evenNumber);
console.log(`The odd numbers:`,odd);
console.log(`The even numbers:`,even);
// output
// [ 1, 3, 5, 7, 9 ]
// Example 

// output
// The odd numbers: [ 1, 3, 5, 7, 9 ]
// The even numbers: [ 2, 4, 6, 8, 10 ]

// In above example oddNumber and evenNumber are the callback functions.

// Note: 
// call back function can be 1. named function 2. anonymous function  3. fat arrow function . 

// Note
// There are two types of callbacks 
// 1. syncronous 
// 2. Asyncronous 