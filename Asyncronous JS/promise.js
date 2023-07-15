
// 1

// let islogin = !!true;
// let userLogin = new Promise((resolve,reject)=>{
//     if(islogin){
//         resolve('Login successfully');
//     }else{
//         reject('Please enter valid email and password');
//     }
// });

// let data = userLogin.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });

// console.log('Welcome to promises in JavaScript');

// output:
// Welcome to promises in JavaScript
// Login successfully


// 2

// let isBreadAvailable = !true;
// let isMilkAvailable = !true ;

// function whatisAvailable (){
//     return new Promise((resolve,reject)=>{
//         if(isBreadAvailable && isMilkAvailable){
//             resolve('Bread and Milk is available');
//         }else if(isBreadAvailable){
//             resolve(`Bread is available`);
//         }else if(isMilkAvailable){
//             resolve(`milk is available`);
//         }else{
//             reject(`Nothing is available`);
//         }
//     });
// }


// whatisAvailable().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// output
// Nothing is available


// 3


function getNumber(){
    return new Promise((resolve,reject)=>{
        resolve(5);
    });
}



function square(number){   
 return new Promise((resolve,reject)=>{
    if(number<=5){
        resolve(number*number);
    }else{
        reject('Sorry the number is greather than 5');
    }
 });
}

getNumber().then((data)=>{
    console.log(`The square of number: `,data);
    square(data).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
    // console.log(data);
});
// output:
// The square of number:  5
// 25

// Note: then ,catch also return promise link;
// we can nest the promises with each other for recieving value.