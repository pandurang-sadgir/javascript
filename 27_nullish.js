// Nullish operator 
let isLogin;
let result = isLogin ?? [12,2,22,]
console.log(result);
// output:
// [ 12, 2, 22 ]

let a = null;
console.log ( a ?? 'This is null value please assign the value');
// output
// This is null value please assign the value


let b = undefined;
console.log(b ?? `This is undefined value please assign value`);
// output
// This is undefined value please assign value

console.log(Boolean(0));
console.log(Boolean(''));
// false
// false

// chaining the logical operator with nullish operator.

console.log((false || null) ?? 'hi i use nullish operator with or operator');
// output:
// hi i use nullish operator with or operator
