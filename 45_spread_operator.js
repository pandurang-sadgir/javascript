
// spread operator in javascript 

const number = [1,2,3,4,5,6];
const totalNumber = [...number,7,8,9,10,];
console.log(totalNumber[2]);


let user = [{
    'name':'pandurang',
    'email':'psadgir111@gmail.com'
}]


let data = [...user];
console.log(data);

console.log(`I spread out the elements`,...number);
function hi (){
    console.log(`Hi i am storing function inside the array`);
    return '';
}
let mixData = [null,undefined,'asda',122,true ,false,['this is array'],{msg:'hi'},hi];

console.log(mixData[8]());
let datacollection  = (number);
console.log(datacollection);



console.log(`The spred out operator with an argument`);

const userName = ['Ram','krushna','hari'];
function fullName(...user){
    let fullName = user.reduce((total,current)=>{
        return `${total} ${current}`;
    });
    console.log(fullName);
}
fullName(...userName);
// output
// Ram krushna hari

let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

[].push.apply(rivers, moreRivers);
console.log(rivers);

// output:
// [ 'Nile', 'Ganges', 'Yangte', 'Danube', 'Amazon' ]

// use the spread operator with wwithnan push method

let firstArray  = [1,2,3,4,5,6]
let secondArray = [7,8,9,10];
firstArray.push(...secondArray);
console.log(firstArray[firstArray.length-2]);
console.log(firstArray);
// output:
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]



let message = 'hello';
console.log([...message]);
