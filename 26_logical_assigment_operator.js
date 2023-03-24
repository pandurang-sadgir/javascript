// Logical assignmetn operator 

// || = logical or assingment operator 

// let a= false
//     b = true;
// console.log( a||=b);
// console.log(a)
// // output:
// true
// true

let a = null;
let b = {
    'FirstName':'abc'
}

let result = a ||=b;
console.log(result);
console.log(a);
console.log(Boolean(null));
// output:
// { FirstName: 'abc' }
// { FirstName: 'abc' }
// false

// let x='',y='affaf';
// console.log(x ||= y)

// // Logical and operator 

// let isLogin = true;
// let message = isLogin;
// let user = {
//  message:'hi..you login successfully'
// }

// let result2 = message &&= user;
// console.log(result2) 


let user = {
    islogin:true,
    message : function(){
        console.log(`Login successfully`);
    }
}

let userStatus = user.islogin &&= user.message();
// output:
// Login successfully

let message = true;
let staticMessage = 'Hello welcome to programming world';
let outcome;
outcome = message &&= staticMessage;
console.log(outcome);
// output
// Hello welcome to programming world


// Nullish assignment operator

let nUser = {
    'firstName':'paddy',
}

nUser.lastName ??= 'starlight';
console.log(nUser);
// output:
// { firstName: 'paddy', lastName: 'starlight' }
