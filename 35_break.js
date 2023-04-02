// break statement in javascript 

console.log(`Print number from 1 to 10`);
let number = 0;
for(let i= 0; i<=9;i++){
    number=i+1;
    console.log(number);
}

// output:
// Print number from 1 to 10
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

console.log(`Using break statement to terminate loop at number 5`);
for(let i= 0; i<=9;i++){
    number=i+1;
    if(number > 5){
        break;
    }
    console.log(number);
}

// output:
// Using break statement to terminate loop at number 5
// 1
// 2
// 3
// 4
// 5

