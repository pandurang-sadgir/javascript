// Q.5 - for number starting from 0-10 (include 10 also). print average of these numbers. Do it using for loop and while loop both.

const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

const numbers = arrayRange(0,10,1);
console.log(numbers);
let average;
let sum = 0;
// for (let i = 0; i <numbers.length; i++) {
//     sum = sum + numbers[i];

//     if(i=== numbers.length-1){
//         average = sum / numbers.length;
//     }

// }

// console.log(`The average of numbers is `,average);
// output:
// The average of numbers is  5
let i = 0;
while (i<numbers.length) {
    sum = sum + numbers[i];
    if(i === numbers.length-1){
        average =sum / numbers.length;
    }
    i++;
}
    

console.log(average);
// output:
// 5