
let numbers = [10,20,30,40,50];
for (const key in numbers) {
    console.log(key);
}

// output:
// 0
// 1
// 2
// 3
// 4


let userDetails = {'name':'ram','age':50000,'job':'lord of universe' }
console.log( userDetails)
for (const key in userDetails) {
    console.log(`${key} : ${userDetails[key]}`);
    
}
// output:
// name : ram
// age : 50000
// job : lord of universe

