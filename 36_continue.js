// continue statement in javascript 

// display odd number using the continue statement

for(let i=1; i<=10;i++){
    
    if(i %2 == 0 ){
        continue;
    }
    console.log(i);
}

// output:
// $ node 36_continue.js
// 1
// 3
// 5
// 7
// 9

// using continue statement in while loop 
console.log(`using continue statement in  while loop`)
let i = 0;
while (i <=9) {
    i++;
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
    
}

// output:
// using continue statement in  while loop
// 1
// 3
// 5
// 7
// 9


// using continue statement with label to print number of pairs 1 to 2



console.log(`The pair of number from 1 to 2`);
for(let i = 1; i<3;i++){
    for(let j = 1; j < 3; j++ ){
        console.log(i,j);
    }
}
// output:
// The pair of number from 1 to 2
// 1 1
// 1 2
// 2 1
// 2 2

