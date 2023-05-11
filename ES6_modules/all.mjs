import * as data from './message.mjs';
console.log(data);

// output:
// [Module: null prototype] {
//     changeName: [Function: changeName],
//     msg: 'This is let keyword export',
//     msg1: 'This is var keyword export',
//     msg2: 'This is const keyword export',
//     msg3: { a: 10 },
//     user: [Function: user],
//     username: 'hi'
//   }
data.user();
