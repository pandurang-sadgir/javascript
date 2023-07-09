// Q.1 - Write a function which take a list  of numbers and  return a list only with even numbers. 

const numbers = [1,2,3,4,5,6,7,8,9,10];

function evenNumberList(){
    let evenNumbers = [];
    for(let number of numbers){
        if(number % 2 === 0){
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}

let evenNumber = evenNumberList();
console.log(evenNumber);
// output:
// [ 2, 4, 6, 8, 10 ]

