// switch statement  in javascript 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// let age = 18n;

// age == 18 ?console.log(`move to upper age`):age>18?console.log(`yes you can drive`):age<18?console.log(`age must above 18`):console.log(`youare not valied`);
// // output
// // age must above 18

// if(age == 18){
//     console.log(`You age is 18`);

// }else if(15==age){
// console.log(`Your age is 15`);
// }


// get day of week
let dayInNumer = 5;
let dayName;

switch (dayInNumer) {
    case 1:
           dayName ='monday'
        break;
    case 2:
           dayName ='tuesday'
        break;
    case 3:
           dayName ='wednesday'
        break;
    case 4:
           dayName ='thursday'
        break;
    case 5:
           dayName ='friday'
           if(dayName == 'friday'){
            console.log(`Yaa hoo today is friday`);
           }
        break;
    case 6:
           dayName ='saturday'
        break;
    case 7:
           dayName ='sunday'
        break;

    default:
        console.log(`There is no day`);
        break;
}
console.log(`The day name is ${dayName}`);
// Output:
// The day name is friday


// using culry braces in switch stateemnt 

let age = 18;
switch (true) {
    case age == 18:{
        console.log(`You are fresher`);
        break;
    }
    case (age<18):
        console.log(`You are under the age`);
        break;
    case (age > 18) :
        console.log(`You are young guys`);
        break;
    default:
        console.log(`Your age in child life`);
        break;
}

// output:
// You are fresher

// we can use block within switch case

let names = 'b'
switch (names) {
    case 'a':
        console.log(`Your name is ${names}`);
        break;
    case 'b':
        console.log(`Your name is b`);
    case 'c':
        console.log(`Your name is c`);
        break;
    case 'd':
        console.log(`Your name is d`);

    default:
        console.log(`Your name is jonny deppp`);
        break;
}

// output
// Your name is b
// Your name is c

// using curly braces .

let color = 'red';
switch(color){
    case 'red': {
        console.log(`You get red color T-shirt`);
    }
    case 'green': {
        console.log(`You get green color T-shirt`);
        break;
    }
    case 'blue': {
        console.log(`You get green blue T-shirt`);
        break;
    }
    case 'orange': {
        console.log(`You get orange T-shirt`);
        break;
    }
    default: {
        console.log(`You get rainbow color T-shirt`);
    }

}
//  output
// You get rainbow color T-shirt


