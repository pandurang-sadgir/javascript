// Unary operator in javascript 
// unary  + operator 


// using + operator on Boolean value 

let  x = true, y=false; 
console.log(`Converting  boolean value using unary plus operator ${x} == ${+x}`);
console.log(`Converting  boolean value using unary plus operator ${y} == ${+y}`);

// output:
// Converting  boolean value using unary plus operator true == 1
// Converting  boolean value using unary plus operator false == 0

// using + operator on undefined value 
let z;
console.log(+z);
// output:
// NaN

// using + operator on null value 
let a = null;
console.log(+a);
// output:
// 0

// using + operator on string  value 

let b = 'a';
console.log(+b);
// output:
// NaN

let c = '10';
console.log(+c);
// output:
// 10


// using + operator on object  value 


let person = {
    'name':'johnny',
    'valueOf':function(){
        return '250';
    },
    'toString':function(){
        return '25';
    },
}

console.log(+person);
// output:
// 250
console.log(typeof +person);
// output:
// number


// ---------------unary  - operator ------------------

// It uses the same rule as unary + just it negate the value after conversion. 

console.log(-true); 
// -1
console.log(-false);
// -0


// Increment and Decrement operator 

// prefix increment ++operand;

let number = 20;
    ++number;
    console.log(number);
    // output:
    // 21


    let weight = 100;
    weight = ++weight +22;
    console.log(weight);
    // output
    // 123


// prefix decrement -- operand;

let num = 30 ;
--num;
console.log(num);
// 29

let count = 120;
count = --count+10;
console.log(count);
// 129



// postfix version of increment operator.

let pa = 20;
let pb = pa++ + 20;
console.log(pb);
console.log(pa);
// output:
// 40
// 21

// postfix version of decrement operator.

let pda = 20;
let pdb = pda-- + 20;
console.log(pdb);
console.log(pda);
// output:
// 40
// 19
