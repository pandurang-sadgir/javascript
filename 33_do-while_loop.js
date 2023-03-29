
// Do while loop in javascript 


// let a = false;
// do {
// console.log(`This statement is execute even the condtion is false 
// because the do while loop is post test loop `);
// }while(a);

// output
// This statement is execute even the condtion is false
// because the do while loop is post test loop.


// print event number using do -while loop

let b = 1;
do {
    if(b % 2 == 0){
        console.log(`This is even number: ${b}`);
    }
    // }else {
    //     // console.log(b);
    //     console.log(`This is odd number ${b}`);
    // }
    b++;

}while(b<=10);

// This is even number: 2
// This is even number: 4
// This is even number: 6
// This is even number: 8
// This is even number: 10