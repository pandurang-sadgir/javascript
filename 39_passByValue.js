
let a = 10;
b= a;
// b = 20;  
console.log(b);
a = 60;
console.log(a);

let user = 'ram';
function names (b){
    t =' ram kushna hari'
console.log(t);
b = 'faafa'
}

names(user);
console.log(user);
console.log(5**5);


let y = 10;
function square(x){
x = x*x;
return x; 

}
let result = square(y);
console.log(result);
console.log(y);
// output:
// 100
// 10



let obj = {
    "name":'a',
    'age':25
}

let obj1 = obj;
console.log(obj1);
obj1 = {'a':2,'b':55}
console.log(obj1)
console.log(obj)
obj = {}
console.log(obj)


// call by refence 

let contactDetail = {
    'number':123456,
    'age':17
}

function contact (data){
    data.age+=1;
    data = {} 
    console.log(data);

}
contact(contactDetail);
console.log(contactDetail);
// output:
// {}
// { number: 123456, age: 18 }




