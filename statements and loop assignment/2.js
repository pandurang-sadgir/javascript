// Q.2 - Let a = [1,2,3,4,5,6] then get a list b. which contains all even number from list a. example, List b should look like this. b = [2,4,6]


let a = [1,2,3,4,5,6],b=[];

for (const number of a) {
    if(number %2 === 0){
        b.push(number);
    }
    
}

console.log(b);
// output:
// [ 2, 4, 6 ]