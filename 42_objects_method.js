let person = {
    'firstName' :'johny',
    'lastName':'depp'
}

// person.greet = function(){
//     console.log(`Welcome to JavaScript world`);
// };
// console.log(person)
// person.greet();

// output:
// { firstName: 'johny', lastName: 'depp', greet: [Function (anonymous)] }
// Welcome to JavaScript world


let user = {
    'firstName' :'johny',
    'lastName':'depp'
}

 function msg(){
    console.log(` Hi..there Welcome to JavaScript world`);
};

// user.greet = msg;
// console.log(user)
// user.greet();
// output:
// { firstName: 'johny', lastName: 'depp', greet: [Function: msg] }
//  Hi..there Welcome to JavaScript world

// output:
// { firstName: 'johny', lastName: 'depp', greet: [Function (anonymous)] }
// Welcome to JavaScript world

let client = {
    'firstName' :'Ram',
    'lastName':'sadgir',
    'greet' : function (){
        console.log(`hi`);

    }
}

console.log(`The original object is `,client);
client.greet();

// output:
// The original object is  { firstName: 'Ram', lastName: 'sadgir', greet: [Function: a] }
// hi


let client1 = {
    'firstName' :'Ram',
    'lastName':'sadgir',
    greet (){
        console.log(`hi..there`);

    }
}

console.log(`The original object is `,client);
client1.greet();

// output:
// The original object is  { firstName: 'Ram', lastName: 'sadgir', greet: [Function: greet] }
// hi..there

let client2 = {
    'firstName' :'Ram',
    'lastName':'sadgir',
    userFullName (){
        console.log(`The user  full name is :
           ${this.firstName}  ${this.lastName} `)

    }
}

client2.userFullName();

// // output
// The user  full name is :
//            Ram  sadgir