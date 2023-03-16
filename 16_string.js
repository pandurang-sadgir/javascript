// String in js 

// The string is immutable if we generate or modify the string it will always return new string 

// How to create string using single and double quotes

var singleQuote = 'hello';
var doubleQuote = "doubleQuote";
console.log('Type of string is :',typeof singleQuote,'value is',singleQuote);
console.log('Type of string is :',typeof doubleQuote,'value is',doubleQuote);

// output:
// Type of string is : string value is hello
// Type of string is : string value is doubleQuote


// ES6 provide template literal to create string
//  backtick (`);

// Creat string using template literal

var string = `Hello ES 6`;
console.log('String create using template literal :',string);
console.log('Type of template litreal string',typeof string);

// output:
// String create using template literal : Hello ES 6
// Type of template litreal string string


// Template literal allow us to use single and double quotes without escapping

var literal = `Hi..."welcome to JavaScript and ES6'S concept"`
console.log(literal);
// output:
// Hi..."welcome to JavaScript and ES6'S concept"

// we can also  use interpolation of variabl in  template literal

var message = 'never give up';
var literal1 = ` Hi..
 life has struggle "${message}" , small steps leads big change`;
console.log(literal1);
// output:
// Hi.. life has struggle "never give up" , small steps leads big change


// Note : we can aslo ' ,'' ,space , new line ,variable intrepolation in template literal



// Escaping speacial charactor.
// To escape special charactor
let str = 'I\r\nm a string!';
console.log(str);

// To get length of string use following properties

let legthOfstr = 'go od';
console.log(legthOfstr.length);
// output:
// 5

// length property return the length of string

// Note:
// JavsScript has String type (S uppercase s letter) which is primitive wrapper type of string .Therefore you can access all the propertie and method of String wrapper from string literal. 


// Accessign the characters of string

var accessStr = 'Goal';
console.log('The main string is : ',accessStr);
console.log('The first charactor of string: ',accessStr[0]);
console.log('The last charactor of string: ',accessStr[accessStr.length-1]);

// Output:
// The main string is :  Goal
// The first charactor of string:  G
// The last charactor of string:  l


// Concatenating string by + operator

let user = 'john';
let fullName = user + 'cina';
console.log(fullName);
// output 
// johncina

// Assemble string piece by piece 
let className = 'btn';
//  className = className + 'btn-primary';
 className+=' btn-primary'
 className+=' none'
 console.log(className);

//  output
// btn btn-primary none


// Converting value to string 

// 1. String(n)

//  converting string to number 
let number = 12355;
console.log(`The number before converting is  : ${number} and its type is ${typeof number}`);

let genaratedString = String(number);
console.log(`The number is converted to string : ${genaratedString}`);
console.log(`The number is converted to string and its type : ${typeof genaratedString}`);

// output
// The number before converting is  : 12355 and its type is number
// The number is converted to string : 12355
// The number is converted to string and its type : string


// converting boolean to string 
let booleanValue = true;
console.log(`The current value is: ${booleanValue} and its type is : ${typeof booleanValue}`);

let convertBooleanToString = String(booleanValue)
console.log(`The boolean value converted to string: ${convertBooleanToString} `);
console.log(`The converted value type is : ${typeof(convertBooleanToString)}`);

// output :
// The current value is: true and its type is : boolean
// The boolean value converted to string: true
// The converted value type is : string


// converting undefined value into string .

var undefineVar;
console.log(`The variable is just declared whose value is : ${undefined} and its type is ${typeof undefineVar}`,);

let convertUndefinedValuetoString = String(undefineVar); 
console.log(`The undefine value is converted to string: ${convertUndefinedValuetoString} and It's type is ${typeof(convertUndefinedValuetoString)}`);

// output:
// The variable is just declared whose value is : undefined and its type is undefined
// The undefine value is converted to string: true and It's type is string


// converting null value to string 

let nullValue = null;
console.log(`current value is: ${nullValue}`);
console.log(`Its type is : ${typeof nullValue}`);
let convertNullValueToString = String(nullValue);
console.log(`converted value is: ${convertNullValueToString}`);
console.log(`converted values type is : ${typeof convertNullValueToString}`);

// output:
// current value is: null
// Its type is : object
// converted value is: null
// converted values type is : string


// Convert other value to string   using n.toString();

let strConversion = 12;
let conValue = strConversion.toString();
console.log(typeof conValue);


// let nullValue1 = undefined;
// let convertNullToString = nullValue1.toString();
// console.log(convertNullToString)

// output
// TypeError: Cannot read properties of undefined (reading 'toString')

// Note :
// n.toString() method does not work on the null and undefined value 


// Comparing string  using comparision operator 
// ASCII value of a is 97 and b is 98

let firstValue = 'a';
let secondValue = 'b';
let result = firstValue > secondValue;
let result1 = firstValue < secondValue;
let result2 = firstValue <= secondValue;
let result3 = firstValue >= secondValue;
let result4 = firstValue == secondValue;
console.log(`The ASCII value of a == 97 and b == 98`);
console.log(`is a is greater than b : ${result}`);
console.log(`is a is less  than b : ${result1}`);
console.log(`is a is less than  or equal to b : ${result2}`);
console.log(`is a is greater  than  or equal to b : ${result3}`);
console.log(`is a is equals to b : ${result4}`);

// output:
// is a is greater than b : false
// is a is less  than b : true
// is a is less than  or equal to b : true
// is a is greater  than  or equal to b : false
// is a is equals to b : false

