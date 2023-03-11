// Constant is just declared
// const userName;
// console.log(userName);
// output
// SyntaxError: Missing initializer in const declaration


// constant declare and initialize immediatly
const clientName = 'jonny depp';
console.log(clientName);
// output
// $ node 1_constant.js
// jonny depp


// Trying to change the value of constant
// const message = 'Hello js';
// message = 'bye bye old trends';
// console.log(message);
// output
// TypeError: Assignment to constant variable.

// Constant is immutable but we can generate value by using it .
const userOne = 'welcome';
console.log(userOne);
// add straing to constant
const userTwo = userOne+'javascript';
console.log(userTwo);

// output
// welcomejavascript
