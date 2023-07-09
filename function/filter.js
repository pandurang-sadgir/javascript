let userData = [
    {'user':'ram','age':65},
    {'user':'shyam','age':75},
    {'user':'jay','age':23},
    {'user':'shiv','age':27},
    {'user':'ketan','age':15},
    {'user':'chetan','age':55},
    {'user':'radhe','age':35},
]

let youngYouth = userData.filter((val,index,arr)=>{
    if(val.age>20 && val.age<30){
        return true;//This return object value.
    }else{
        return false;
    }
})


console.log(userData);
console.log(youngYouth);
// output:
// [
//     { user: 'ram', age: 65 },
//     { user: 'shyam', age: 75 },
//     { user: 'jay', age: 23 },
//     { user: 'shiv', age: 27 },
//     { user: 'ketan', age: 15 },
//     { user: 'chetan', age: 55 },
//     { user: 'radhe', age: 35 }
//   ]
// [ { user: 'jay', age: 23 }, { user: 'shiv', age: 27 } ]
