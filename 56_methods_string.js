let user = 'jack sparrow';
console.log(`String convert to uppercase`);
console.log(user.toUpperCase());
// output:
// JACK SPARROW

let user2 = 'JOHHNY DEPP';
console.log(user2.toLocaleLowerCase());
console.log(user2);
// Note: uppercase lower case method does not chaneg the original value

// output
// johhny depp

// charAt method of string 

let data = user2.charAt(2);
console.log(data);
// output
// H


console.log(user2.replace('H','k'));
// output
// JOkHNY DEPP

// split method of string 
//It Split out the string into the tow part.and store it into array
// Note separator is get deleted 
// string.split('separator'):string[]

console.log(user2.split('O'));
// output
// [ 'J', 'HHNY DEPP' ]


// sub string in javascript 
// This method return sub // part of string
// String.substring(start: number, end?: number | undefined): string

console.log(user2.substring(0,2));
console.log(user2.slice(0,2));
// output
// JO


// trim method remove leading and trailling whitespaces 
let user3 = '   hello  Javascript    ';
console.log(user3);
console.log(user3.trim());

// output
    // hello
// hello

