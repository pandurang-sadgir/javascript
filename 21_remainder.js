// Remainder operator in javascript 
// % remainder operator uses to  get remainder value .

// dividend % deviser

// Using the remainder operator with positive dividend example 

let remainder = 11 % -2;
console.log(remainder);
// output:
// 1

remainder = 11 % 2;
console.log(remainder);
// output:
// 1

// Note : with an positive dividend we always get positive remainder. 


// Using remainder operator with negative devidend operator.

remainder = -11 % 2;
console.log(remainder); 
// output
// -1

remainder = -11 % -2;
console.log(remainder);
// output
// -1


// using the remainder with an speacial value 

// when dividend is infinity and divisor is finite number then remainder is NaN.

remainder = Infinity % 10;
console.log(remainder);
// output
// NaN

// when dividend is finite and divisor is 0 number then remainder is NaN.

remainder = 10 % 0;
console.log(remainder);
// output
// NaN

// if both dividend and divisor is infinite 
remainder = Infinity % Infinity;
console.log(remainder);
// output
// NaN

// if dividend and divisor is 0
remainder = 0 % 0;
console.log(remainder);
// output
// NaN

// if dividend is finite and divisor is infinite then we get remainder dividend

remainder =  99 % Infinity;
console.log(remainder);
// output:
// 99

// if dividend is zero 0 and divisor is finite number

remainder =  0 % 10;
console.log(remainder);
// output
// 0

// if either value is numeric string then that number is converted to number using  Number()

remainder = '10' % 4;
console.log(remainder);

// output:
// 2

// Always use (%) remainder operator to know even and odd number.
// use numeric 2 for odd and even division of numbers.

// Note :
// remainder and modulo are different in javascript . 

// To get modulo in javascript use following expression 
// ((dividend % divisor) + divisor) % divisor;




const mod = (dividend,divisor) => ((dividend % divisor) + divisor) % divisor;    

console.log(`The remainder is :`, 5 % 2);
console.log(`The modulo is :`, mod(5,2));
console.log(`The remainder is :`, -9 % 2);
console.log(`The modulo is :`, mod(-9,2));
console.log(`The remainder is :`, -5 % 3);
console.log(`The modulo is :`, mod(-5,3));

// output :
// The remainder is : 1
// The modulo is : 1
// The remainder is : -1
// The modulo is : 1
// The remainder is : -2
// The modulo is : 1






