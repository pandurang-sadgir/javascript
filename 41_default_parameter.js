

function message (message = 'Welcome to JavaScript'){
    console.log(message);
}

message();
// output
// $ node 41_default_parameter.js 
// Welcome to JavaScript


// assigning  default value to parameters 

function userName(name) { 
     name = typeof (name) != 'undefined' ? name:'Jonny Depp';
    console.log(name);
 }
 userName();
//  output:
// Jonny Depp

function mesg(message) {  
    console.log(message);
}

mesg();
// undefined

// passing undefinde to parameters;

function addition (a=10, b=10, msg = 'Addition of two number is :'){
    let result  = a + b;
    console.log(`${msg} `, result);
}

addition(undefined,55);
// output:
// Addition of two number is :  65


// Evaluating default parameters 

function put(toy,toys = []){
  toys.push(toy);
 return toys;
 
}

console.log('data is ',put('Cycle'));
console.log('data is ',put('ball'));
// put('doll');

// output:
// data is  [ 'Cycle' ]
// data is  [ 'ball' ]


function todayIs (todayIs = currentDate()){
    console.log(todayIs);
}

function currentDate() {  

    let currentDate = new Date().toLocaleDateString(`en-IN`);
    return currentDate;
}

todayIs();

// output:
// 7/4/2023


// we make the argument are mendatory 

function add (num1 = argMendatory() ,num2 = argMendatory()){
    return num1 + num2;

}
console.log(`The addition of two number is `);
let sum = add(50,22);
console.log(sum);

function argMendatory (){
    throw new Error(`The argument are mandatory`);
}

// output :
// The addition of two number is
// 72

// Using other parameter as value to other parameters 

function square( x = 10,y = 10, z = x *y ) {
    return z;  
}

let squareroot = square();
console.log(squareroot);
// output
// 100


function para(x = y){
console.log(x);
}
// para();

// output
// ReferenceError: y is not defined


let taxRate = ()=> 7;
function totalPrice(price,tax = taxRate()) { 
    let totalTax = price * tax /100;
    let netTotal = price + totalTax ;
    console.log(`The total price including GST:,${netTotal} `);
 }

 totalPrice(700);
//  output:
// The total price including GST:,749