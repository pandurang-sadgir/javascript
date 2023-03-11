// String in javascipt 

// declaration of string 

var firstString = '"welcome to javascript"';
console.log('The string value is: ',firstString);
console.log('The type of string value is: ',typeof firstString);

// output:
// The string value is:  "welcome to javascript"
// The type of string value is:  string

let message = 'NDMVP\'S'; // use \ to escape the single quote (')
console.log(message);
// output:
// NDMVP'S


// javascript string is immutable 
var str 
str='javascript';
console.log(str+'string');

// output:
// javascriptstring
// Note behind the scene the original straing is destraoyed.

// let us understand following example to know JS string is immutable 

var str1 = 'Javascript';
 str1[0] ='P';
console.log(str1);

// output:
// It does not assign P to J
// Javascript


// Re-assignment to string

var user = 'paddy';
   user = 'Tiger';
   console.log(user);

   // output:
// Tiger

