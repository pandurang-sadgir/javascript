function getTotal (){
    return [10,20,30,40,50,60];
}

let data = getTotal();
console.log(data);
let z =data [0];
console.log(z);
// Instead of this 

let [a,b,c,d,e,f,g] = getTotal();
console.log(a,b,c,d,e,f,g);
// output:
// 10 20 30 40 50 60 undefined

// Array destucturing with an rest parameter 
let [x,y,...v] = getTotal();
console.log(x,y,v);
// output:
// 10 20 [ 30, 40, 50, 60 ]

// assingning the default value to an variable.
let number = [212,10];
let  [ aa=55,bb=60 ] = number;
console.log(aa,'value of aa'); 

let numberData = number;
numberData.push('5656');
console.log(number);

// if function does not return array 

 function number1 (){
    return null;
 }

 let  [ba = 10,ab= 65] = number1() || [];
 console.log(ba);
 console.log(ab);
//  output:
// 10
// 65

let countOfNum = [11,22,[33,55,44,66]]

let [zz,cc,[gg,rr,yy,ll]] = countOfNum;
console.log(zz,cc,gg,rr,yy,ll);

function arithmaticOperation(a,b){
    return  [
        a+b,
        a-b,
        a/b,
        a*b
    ]
}

let [add,sub,mul,div] = arithmaticOperation(20,5);
console.log(add,sub,mul,div);
// output:
// 25 15 4 100

let firsValue = 20,secondValue = 60;

let operation = [firsValue+secondValue,firsValue-secondValue,firsValue*secondValue,firsValue/secondValue];
console.log(typeof operation);


let  [...k] = [5,5,2,,55,12,1,2,3,8,22];
console.log(k);
let re = Boolean([]);
console.log(re);
