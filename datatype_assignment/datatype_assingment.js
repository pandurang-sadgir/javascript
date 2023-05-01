// Q1.  write a program to get length of a string (hint : use length method on string)

function lenghtOfString (str){
    return str.length;
}

let length = lenghtOfString('jack sparrow');
console.log(`The length of string is : `,length);

// output
// The length of string is :  12

// --------

// Q2.  write a program to print first and last value  of an array

function firstAndLastValueOfArray(arr){
  return { 'firstvalue':arr[0],
            'lastValue':arr[arr.length-1]}
}

let values = firstAndLastValueOfArray([10,20,30,40,50,60,70,80,90,100]);
console.log(values);
// output
// { firstvalue: 10, lastValue: 100 }


// Q3. For a object my_obj = {“name”:”abc”,”list”:[1,2,3]} print first index value of array


my_obj = {'name':'abc','list':[1,2,3]}
console.log(my_obj);

console.log(`The first index value of an array is ${my_obj.list[0]}`);
// The first index value of an array is 1

// to get index of rist element 
console.log(`The index of first element of an arraay ${my_obj.list.indexOf(4)}`);


// Q5. If a = [1,2,3,[1,2,”name”]]. replace name with gender
let a = [1,2,3,[1,2,'name']];

console.log(a[3][2]='gender');
console.log(a);
// output
// [ 1, 2, 3, [ 1, 2, 'gender' ] ]

// Q6. If a ={“name”:”test”,”gender”:23,”demo”:[1,2,3,[1,2,3,”name”]]}. replace name with gender

let aObj = {'name':'test','gender':23,'demo':[1,2,3,[1,2,3,'name']]}

aObj.demo[3][3]='gender';
console.log(aObj);
// output:
// { name: 'test', gender: 23, demo: [ 1, 2, 3, [ 1, 2, 3, 'gender' ] ] }


// Q7. If a ={“a1”:[{“a2”:[‘i am a string’,[‘grab me’]]}]}. print grab me
let aa ={'a1':[{'a2':['i am a string',['grab me']]}]};

console.log(`${aa.a1[0].a2[1][0]}`);
// output
// grab me

// Q8. 3.0 == 3. True or False?

console.log(3.0 == 3?true:false);
// true

// Q.9. let a =  [1,2,3,{“a”:[{“age”:24}]}] and b = {“age”:[{“age”:20}]} grab both ages and then            
// check if both are equal

let ag =  [1,2,3,{'a':[{'age':24}]}] , b = {'age':[{'age':20}]} 
firstAge = ag[3].a[0].age;
secondAge = b.age[0].age;
console.log(firstAge,secondAge);
let result = firstAge === secondAge ? true:false;
console.log(result);
// output:
// false







