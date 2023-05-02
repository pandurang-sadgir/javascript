
// console.log('pandurang " hello" "sadgir"');
// console.log("pandurang 'hello' 'sadgir'");
console.log("pandurang \"hello\" \"sadgir\"");

let names;
console.log(names);
names+='acc';
console.log(names);


let  abcd = 'asfasf';
abcd[0]='pppp';
console.log(abcd)

// const range = (start, end) => {
//     const length = end - start;
//     return Array.from({length}  , (_, i) => start + i);
// }
// let result = range(0,5);
// console.log(result);


console.log(Array.from('ram'));
// [ 'r', 'a', 'm' ]

console.log(Array.from(123));
// [] it does not itrate over the non iterable object
var length  = 10;
console.log(Array.from({length}),()=>{
    return 10 ;
});
