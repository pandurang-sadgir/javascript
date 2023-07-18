// Note:
// This is an another way to recieve a promise  value

//Firstly  create promises

function getNumber(){
    return new Promise((resolve)=>{
        resolve(55);
    })
}

function square(number){
    return new Promise((resolve,reject)=>{
        if(number<=5){
            resolve(number*number);
        }else{
            reject('The number is greather than 5');

        }
    });
}

// Create Asyncronous function to recieve value 
async function getSquare(){
    try{
        const number =  await getNumber();
        const squares =  await square(number);
        console.log(squares);

    }catch(err){
        console.log(`Error:`,err);

    }
}

getSquare();

// output:
// $ node async_await_try_catch.js 
// Error: The number is greather than 5

// Note:
// Multiple asyncronous promise run parallelly,
// Only those promises complete first which require less time when those independent.
// Note: block of code within async promse is executing syncronous nature.