// Q.1 - Let a = [1,2,3,4,5] use a for loop and print all odd and even  numbers separately

let a = [1,2,3,4,5];
let evenNumber = [],oddNumber = [];
for (let i = 0; i<a.length; i++) {

    if(a[i] %2 === 0){
        evenNumber.push(a[i]);
    }else{
        oddNumber.push(a[i]);
    }
    
    }

    console.log('The even number are : ',evenNumber);
    console.log('The odd number are : ',oddNumber);
    // output
//     The even number are :  [ 2, 4 ]
// The odd number are :  [ 1, 3, 5 ]