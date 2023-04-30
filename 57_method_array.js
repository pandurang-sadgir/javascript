// method of array 

let numbers  = [2,25,1,2,'f'];
let lengthOfArray = numbers.push('555');
console.log(lengthOfArray);
console.log(numbers);

// push method pushes the element at the end of array and return length of array
// syntax 

// Array.push(elemnt):lenght 


// pop method in javascript 
// pop method remove last element and return that element .
let removed = numbers.pop();
console.log(numbers,'last element is poped',removed)
console.log(numbers)

// unshift method of array insert the element at start of an array

let len = numbers.unshift(9999);
console.log(len);
console.log(numbers);



// shift method of javascript 

 let re = numbers.shift();
console.log('Shift method remove the first element of array',re);
console.log(numbers);

// output:
// Shift method remove the first element of array 9999
// [ 2, 25, 1, 2, 'f' ]


// reverse method reverse the element of original array and return that array
let num = [1,2,3,4,5,6];
let reversArray = num.reverse();
console.log(reversArray)
console.log(num)
// output
// [ 6, 5, 4, 3, 2, 1 ]
console.log(['a','b','c','d','e'].reverse());
// output:
// [ 'e', 'd', 'c', 'b', 'a' ]



// slice method of array 

let numbers1 = [1,2,3,4,5];
let k =numbers1;

let slice = numbers1.slice(0,4);
console.log(slice);
// output
// [ 1, 2, 3, 4 ]
// k.pop();
// console.log(numbers1);


// to string method of array
let numberArray  = [1,2,3,4,5,6];
let stringRepre = numberArray.toString();
console.log(stringRepre);
console.log(typeof stringRepre);
console.log(stringRepre[0]);
// output:
// 1,2,3,4,5,6
// string
// 1


// The concate method of an array.
// This method concatenate the arrays and return new array.
// we can use empty array notation to run specific method if we do not have specific array. 

let a = [1,2,3,4]
let b = ['a','b','v','v','y','w'];
let c = [{}] 
let concateArray  = [].concat(a,b,c);
console.log(concateArray);

// output:
// [
//     1,   2,   3,   4,   'a',
//     'b', 'v', 'v', 'y', 'w',
//     {}
//   ]

console.log(`The concate method does not change the original array`,a);


let  bobj = {}.name='ram';
console.log(bobj);
// output:
// ram