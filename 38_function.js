// function in javascript

// every function bydefault  return undefined. 

function message(msg){
    console.log(msg);
}

let result = message(`Hi..there, welcome to javascript`);
console.log(result);

// output:
// $ node 38_function.js 
// Hi..there, welcome to javascript
// undefined



function add (a,b) {  
    let result =  a + b;
    console.log('Welcome to javascript');
    return result;
}

let sum = add(20,50);
console.log(sum);

// output:
// 70



// addition of ten ragument using argument object 
function addOfrgument() {
    let sum = 0;
    for(let i = 0; i< arguments.length; i++){
        sum+= arguments[i];    
    }
    return sum;
    
}
let addditionOfArguments = addOfrgument(1,2,3,4,5,6,7,8,9,10);
console.log(addditionOfArguments);

// output:
// 55



// function hositing

hoisting();
function hoisting() {  
    console.log(`The function is hoisting`);
}

// output:
// The function is hoisting


// assigning the function to variable

function  addition ( a,b) {  
    return a+b;
}

let sum1 = addition;
console.log(`Assigning function to variable`);
console.log(sum1(10,10));
console.log(addition(100,10));
// output:
// Assigning function to variable
// 20
// 110


// passing  function as argument




function average(fn) { 
let data = fn(250,250);
let average = data[0] / data [1];
let obj = {'data' : data,
"average":average}
return obj;

 }

 let avg = average(sumOfA);
 console.log(`average of numbers is 
 data: ${avg.data},
 avaerage is : ${avg.average}`);

// //  output:
// average of numbers is
//  data: 500,2,
//  avaerage is : 250

function sumOfA(){
    let sum = 0;
    let arg;


    // returning function from an function

    for(let i = 0; i< arguments.length; i++){
        sum+=arguments[i];
    }
    arg = [sum,arguments.length];
return arg;
}



console.log(ab);
console.log('aavava');
var ab= 1212122 ;
console.log(ab);
