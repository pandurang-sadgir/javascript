// Rest parameter in javascript 

function restParameter(a,b,...c){
    console.log(c);
}

restParameter(1,2);

// output:
// $ node 44_rest_parameter.js 
// [
//   9, 8, 7, 6, 5,
//   4, 3, 2, 1, 0
// ]

function addOfArguments (...args){
    let total = 0;
    for (let arg of args) {
    total  = total + arg ;
}
console.log(total);
}

addOfArguments(10,20,30,40,50);


function p (...a){
    console.log(`The scope of rest parameters`);
    console.log(a);
}
p('fa');


// filter method in javavascript 

let ages = [18,14,'a',undefined,'19A','20A','21C','22C','23D','24D',22,65,71,21,12,12,15,156,18,16,6,9,41,11,255,88,'s'];

function ageFilter (){
    let validAge = ages.filter(filterFuction)
    return validAge;

}

function filterFuction(age){
    if(typeof age == 'string'){
        return age;
    }
}


let result = ageFilter();
console.log(`Age above the 18 : ${result}`);

let a = 'afa';
console.log(typeof a);


let numbers = [1,2,3,4,5];

let sumOfNumber = numbers.reduce(function(total,curr){
    return curr+total;
},0);
console.log(`The sum of numners is ${sumOfNumber}`);

// output:
// The sum of numerbs is 15

let mixNumber = [2,5,2.2,4,'5','6','Hi','Hello','how are you'];

 function sum(){
   let filetrData = mixNumber.filter(function (value){
        if(typeof(value) == "number"){
            return value;
        }
    }).reduce(function(total,currentValue){
        return total + Math.round(currentValue);
    },0);

    return filetrData;
 }

 let data  = sum();
 console.log(data);

//  output:
// 13



function mesg (){
    console.log('Yes we can pass function as argumnet');
}

function receiveFunctionAsArgument(message){
    message();
}
receiveFunctionAsArgument(mesg);
// output:
// Yes we can pass function as argumnet


// rest Parametrs with an arrow function 
const combineMessage = (...mArg)=>{
    return mArg.reduce((message,currentMessage)=>{
        return `${message}  ${currentMessage}`
    },'')
    console.log(`The arrow function is called`);
}

let mainMessage = combineMessage('welcome','to','javascript','journey');

console.log(mainMessage);
// output:
// welcome  to  javascript  journey