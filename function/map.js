let numbers = [1,2,'',3,4,5,6,7,8,9,10];
let square = numbers.map((val,index,arr)=>{
    console.log(val,index,arr);
    return val*val;

}) 
console.log(square);
