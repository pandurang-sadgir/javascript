
// creating map 

let userRole = new Map();
console.log(typeof(userRole));
console.log(userRole instanceof Map);
// output:
// object
// true

// add element to map 

 let data = userRole.set('Jhonny','admin').set(12,'network');
//   let error = data.delete(12);
  //  data.clear();
  let record = userRole.entries();
// console.log( record instanceof Map,'hai ya nahi');
for(let item of record){
    console.log(item);
    console.log(item[1])
}




 console.log(userRole);
 console.log(data);

 const student = new Map();
 console.log(`This is student map object `,student);
 student.set('name','ram').set('age',25).set('name','shayam');
//  console.log(student.get('name'))
 console.log(student);

// student.clear();
// console.log('clear map',student);
// let hint = student.delete('age');
// console.log(student);
// console.log(hint);
// let iterableObject = student.entries();
//  console.log(iterableObject);

// let ageOfStudent  = student.get('age');
// console.log('The age of student',ageOfStudent);

// let isHas = student.has('age0');
// console.log(isHas);

// let keys  = student.keys();
// console.log(keys);
// for(let key of keys){
  // console.log(key);

// }

let values = student.values();
console.log(`The values of keys`,values) 
for(let value of values){
  console.log(value);
}

let roleOfUser = new Map([
  ['amit','salefforce developer'],
  ['ram','cloud developer'],
  ['krushna','cloud developer'],
  ['nilesh','cloud developer']
]);
console.log(roleOfUser);
// output
// Map(2) { 'amit' => 'salefforce developer', 'ram' => 'cloud developer' }

// let result = roleOfUser.get('rahul');
// console.log(result);
let sizeOfMapObject = roleOfUser.size;
console.log(sizeOfMapObject,'this is size of an object');

// iterating over the map objects kesy
let amit = {
  'fullName':'amit aher',
  'eduacation':'BE-computer'
  }
  ,ram = {'fullName':'ram suryvanshi',
  'eduacation':'creator of universe'};

let userRoles = new Map(
  [
    [amit,'administrator'],
    [ram,'Tech lead of universe'],
  ]
);
for (const key of userRoles.keys()) {
  console.log(key.fullName);
  
}
// console.log(userRoles);
// output:
// amit aher
// ram suryvanshi

// iterating over the map values 
// for(const value of userRoles.values()){
//   console.log(value);
// }

// iterating over the elements or property of map 

for(const element of userRoles.entries()){
// console.log(`User name is ${element[0].fullName} and It's Job role is ${element[1]}`)
console.log(element);


}


// let enrtiesResult = userRoles.entries();
// console.log(enrtiesResult);
console.log(userRoles)

userRoles.forEach((value,key)=>{
  console.log()

  console.log(value)
  console.log(key)

})

let datab = [1,2,4,5,92,12,52,2,2,];
datab.forEach((value,key)=>{
  console.log(`${value} : ${key}`);
})
// output
// 1 : 0
// 2 : 1
// 4 : 2
// 5 : 3
// 92 : 4
// 12 : 5
// 52 : 6
// 2 : 7
// 2 : 8
// let arrayOfKeys = [...userRoles.keys()]
// console.log(arrayOfKeys);
let keys =[ ...userRoles.keys()];
let value =[ ...userRoles.values()];
console.log(value)
keys.push('jack');
console.log(keys)