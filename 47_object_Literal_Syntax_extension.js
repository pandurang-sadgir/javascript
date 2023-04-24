// // object literal syntax extension
// function userFullName (firstName,lastName){
//     return {
//         'firstName':firstName,
//         'lastName':lastName
//     }
// }

// let user = userFullName('johnny',' depp');
// console.log(user);


// // { firstName: 'johnny', lastName: ' depp' }


// with an new synstax 
function userFullName (firstName,lastName){
    return {
        firstName,
        lastName,
    }
}

let user = userFullName('kenny',' depp');
console.log(user);

// output:
// { firstName: 'kenny', lastName: ' depp' }


let names = 'computer',price = 25000;

let machine = {
    names,
    price
}

console.log(machine);

// output:
// { names: 'computer', price: 25000 }

// computed property name
let nameOfMachine = 'machine name';
let superMachine = {
    [nameOfMachine]:'oloha pppp ',
    'machine price':255462
}
console.log(superMachine);
console.log(superMachine["machine name"]);
console.log(superMachine[nameOfMachine]);
// output:
// { 'machine name': 'oloha pppp ', 'machine price': 255462 }
// oloha pppp
// oloha pppp

console.log(`get property name from expression`);
let prefix  = 'machine';


let machinDetail = {
    [`${prefix} name`]:'super novo',
    [`${prefix} price`]:584852,
}

console.log(`The computed object is`,machinDetail);

// output:
// The computed object is { 'machine name': 'super novo', 'machine price': 584852 }

// concise method syntax 

let userDetails = {
    'firstName':'john 0000',
    'lastName':'cina',
     'full Name'(){
        console.log(`The user full name is: ${this.firstName} ${this.lastName}`);
    }
}

 userDetails['full Name']();
 

