// for loop in javascript 

// show the number from 1 to 5 

for (let a = 1; a <=5; a++) {
    console.log(a);
}
// output :
// 1
// 2
// 3
// 4
// 5

// using for loop print even number between 1 to 20;
console.log(`The even number between 1 to  20`);
for(let i = 1; i<=20; i++){
    
    if(i % 2 == 0){
        console.log(i);
    }

}

// output
// The even number between 1 to  20
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20


// print odd number without for loop initialiser 

console.log(`The odd number from 1 to 20`);

let i = 0;
for (;i<=20;i++){
    if(i % 2!= 0) {
        console.log(i);
    }
}

// output:
// The odd number from 1 to 20
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

// for loop without condition 

console.log(`The for loop without condition`);

console.log(`Print odd number using iterator`)
for(let i=1; ;i+=2){
    if(i>10){
        break;
    }
    console.log(i);

}

// output
// The for loop without condition
// Print odd number using iterator
// 1
// 3
// 5
// 7
// 9

// for loop without any expression
// console.log(`The loop without any expression `);
// let e = 1;
// for(;;){
//     if(e>10){
//         break;
//     }
//     console.log(e);
//     // e=e+2;
//     e+=2;
// }

// output:
// The loop without any expression
// 1
// 3
// 5
// 7
// 9

// using javascript for loop without loop body 

let sum = 0;
let message;
for(let i=1; i<=1;i++,sum+=i,message='hi..there');
console.log(`The sum of number : ${sum}`);
console.log(message);
// output:
// The sum of number : 2
// hi..there

// sum of ten number
let sumOfNumber = 0;
for(let i = 0;i<=9;i++,sumOfNumber+=i);
console.log(`The sum of ten number is  : ${sumOfNumber}`);
// output:
// The sum of ten number is  : 55