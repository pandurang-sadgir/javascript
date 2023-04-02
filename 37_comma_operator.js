// comma operator in javascript 


let result = (20+55,55+55);
console.log(result);
// output:
// 110


let x = 10;
let y = (x++,x+1);
console.log(x,y);
// output:
// 11 12


// print the array of number from 3 * 3
let numberOfArray = [1,2,3,4,5,6,7,8,9];
let matrix = '';

for(let i = 0,j=1; i<numberOfArray.length;i++,j++){
    matrix = matrix +numberOfArray[i] +' ';
    if(j % 3 === 0){
        matrix = matrix + '\n'

    }
}
console.log(`The original array is ${numberOfArray}`);
console.log(`The matrix of numbers`);
console.log(matrix);

// output:
// The original array is 1,2,3,4,5,6,7,8,9
// The matrix of numbers
// 1 2 3
// 4 5 6
// 7 8 9


