// Q.2 - Write a function which takes 3 argument number, low , high. Return whether the given number is between the range or not. low means: starting of range. high means: end of range


function isValidNumber(number,low,high){
    if(number>=low && number <=high){
        return 'The number is between the range'
      }else{
             return 'The number is not between the range'
     }

}

let result = isValidNumber(0,1,10);
console.log(result);

// output:
// The number is not between the range