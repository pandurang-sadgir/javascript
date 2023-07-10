console.log('Welcome to asyncronous programming');
// // 1 .syncronous nature of program execution.

// for (let i= 0; i < 500; i++) {
//     const index = i;
//      console.log(`The index number is : ${index}`);
// }

// console.log(`We get this message after loop get end`);

// Note this is syncronous nature which follow the strict top down execution approach for execution without escaping code execution.




// 2.Asyncronous nature of program execution.
setTimeout(()=>{
    for (let i= 0; i < 500; i++) {
        const index = i;
         console.log(`The index number is : ${index}`);
    }
},1000);

console.log('We get this message before loop execution even though it is after loop');
setTimeout(()=>{
    for (let i= 0; i < 500; i++) {
        const index = i;
         console.log(`The index number is : ${index} : second timeout`);
    }
},9000);