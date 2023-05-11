function add (a,b){
    return a+ b;

}
let name = 'ram';
let fruits = 'appple';
// let result =add(500,200);
// console.log(result);

export {add as sum,name as userName};
console.log(`The module a is executing`);