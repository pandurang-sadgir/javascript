// recursive function in javascript 

function user() {
    console.log(`I am recursive function`);
    user()
}
// user()
// // output:
// I am recursive function
// I am recursive function
// I am recursive function
// I am recursive function
// I am recursive function
// I am recursive function
// I am recursive function
// I am recursive function
// I am recursive function



// count down number from  10 to 1;

let countDown = 10;
 let a = function (num) {
    console.log(num);  
    num  = num - 1;
    if(num === 0){
        return;
    }
    ab(num);
    
}

let ab = a;
a = null;
ab(countDown)

// console.log(count);
// output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

let b = a = {}

console.log(b);
b= 2;
console.log(b);

