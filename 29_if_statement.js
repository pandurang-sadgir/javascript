
let age = 18;
if(age>=18){
console.log(`You are eligible`);
}
// output
// You are eligible


if(age <18){
    console.log(`You are  eligible`);

}else{

}

// Nested statement

let ageOfUser = 18;
let state = 'Doctor';
if(ageOfUser>=18){

    if(state == 'Doctor'){
        console.log(`You can drive`);
    }else{
        console.log(`You are not doctor`);
    }

}else{
    console.log(`You can not drive`);
}

// output:
// You can drive



if(ageOfUser>=18 &&  state == 'Doctor'){
    console.log(`Using logical operator: You can drive `);

}else {
    console.log(`Using logical operator ,You can not  drive`);
}
// Output:
// Using logical operator: You can drive

//  if else statement


let runs  = 100;

if(runs == 50){
    console.log(`You make fifty`);
}else{
    console.log(`You make century`);
}

// output:
// You make century

// chainof if else 


if(2){
console.log(`zero`);
}else
if(1){
    console.log(`one `);

}