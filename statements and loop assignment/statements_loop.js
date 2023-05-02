// Q.1 - Let a = [1,2,3,4,5] use a for loop and print all odd and even  numbers separately.


a = [1,2,3,4,5];
for(let i= 0; i<a.length;i++){
    if(a[i]%2 === 0){
        console.log(`The even number is :${a[i]}`);
    }else {
        console.log(`The odd nuumber is ${a[i]}`);
    }
}

// output:
// The odd nuumber is 1
// The even number is :2
// The odd nuumber is 3
// The even number is :4
// The odd nuumber is 5

// Q.2 - Let a = [1,2,3,4,5,6] then get a list b. which contains all odd number from list a. example, List b should look like this. b = [1,3,5]

let numbers = [1,2,3,4,5,6];
let oddNumber  =[];
for (const number of numbers) {
    if(number %2 === 0){
        continue;
    }else{
        oddNumber.push(number);

    }
 }

 console.log(`The odd numbers array is`,oddNumber);
//  output:
// The odd numbers array is [ 1, 3, 5 ]

const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );
let result  = arrayRange(1,5,1);
console.log(result);
// output:
// [ 1, 2, 3, 4, 5 ]