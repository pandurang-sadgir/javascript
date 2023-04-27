let element = [1,2,2,23,5,5,64,7,8464,64,9] 
let setObject  = new Set(element);
console.log(typeof setObject);
console.log(setObject instanceof Set);
// output:
// object
// true
console.log(setObject.size);


let student = new Map();
student.set('name','ram','age',55);
console.log(student);
for(let data of student){
    console.log(data);

}

console.log(`This is user set`);
let user  = new Set([{'name':'ram'},{'name':'ram'},{'name':'ram'}]);
// console.log([...user]);
console.log(user);
// output
// Set(3) { { name: 'ram' }, { name: 'ram' }, { name: 'ram' } }



let uniqueCharacter  = new Set(['A','g','g','h','h','h' ]);
console.log(uniqueCharacter);

// add element to an set object 
let data = uniqueCharacter.add('z','p','g','y','r','w','A','A').add('p','by');
console.log(uniqueCharacter);
// output:
// Set(4) { 'A', 'g', 'h', 'z' }
// Set(5) { 'A', 'g', 'h', 'z', 'p' }
// To get size of an set  

console.log(uniqueCharacter.has('A'));
let msg = uniqueCharacter.delete('h','A');

console.log(uniqueCharacter,'DElete h character',msg);
console.log(`Iterate over the set of element`);

console.log('keys method()',uniqueCharacter.keys());
console.log('keys method()',uniqueCharacter.values());
// uniqueCharacter.forEach((element,key) => {
//    console.log(element,key); 
   
// },'aa');
// true
// console.log(uniqueCharacter.entries(),'Entries of set');
// [Set Entries] {
//     [ 'A', 'A' ],
//     [ 'g', 'g' ],
//     [ 'z', 'z' ],
//     [ 'p', 'p' ]
//   } Entries of set
// console.log(`clear out the set`);
// let r= uniqueCharacter.clear();
// Set(0) {} undefined 
// console.log('The size of set',uniqueCharacter.size);
// output:
// The size of set 3j


let superComputer = {type: 'laptop'};
let extraServer = {type: 'server'};
let equipment = new WeakSet([superComputer, extraServer]);

if (equipment.has(extraServer)) {
    console.log('We have a server');
    console.log(equipment);
}


let enumber = new Set([1,2,2]);
console.log(enumber);

// TypeError: Invalid value used in weak set


