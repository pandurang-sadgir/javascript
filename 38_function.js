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



let anum  = [1,1,-1,0,0,-1];
console.log(anum.sort());


// anonymous function 
let a = function (){
    console.log(`This is anonymous function`);
}
a();

// we can return function from function 

let users = [
{ 'name':'x','age':10,'salary':22000},
{ 'name':'d','age':60,'salary':25000},
{ 'name':'g','age':80,'salary':28000},
{ 'name':'h','age':40,'salary':27000},
{ 'name':'j','age':60,'salary':26000}
]
function compareBy(propertyName){
    return function(a,b){
        let x = a[propertyName],
            y = b[propertyName];


    }

}

let sortObject = users.sort();

console.log('A'<'a');

// anonymous function

let na = (function (){
    console.log(`This is anonymous function himmmmmmmmmmmmmmm`);
})

let hh = setTimeout(na,1000);


// creating immeddiately invoked function

(function(){
    console.log(`This is IIF`);
})();




var lhh;
console.log(lhh)

let show = ()=>10+2055555;
let ff = show();
console.log(ff);
