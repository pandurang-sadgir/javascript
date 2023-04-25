let numbers = [10,20,30,40,50];
for (let num of numbers ){
        num = num + 5;
        console.log(num);
}

// output:
// 15
// 25
// 35
// 45
// 55

let num  = [1,2,3,4,5,6,7,8,9,10];
for(let number of num){
 if(number % 2 !== 0){
     console.log(number);
 }
}

// output:
// 1
// 3
// 5
// 7
// 9


// fetching the element with an index

// let colors  = ['red','green','blue','orange'] ;

// for(const index of colors.entries()){

// console.log(index);

// }

// output:
// [ 0, 'red' ]
// [ 1, 'green' ]
// [ 2, 'blue' ]
// [ 3, 'orange' ]


let colors  = ['red','green','blue','orange'] ;

for(const [index,color ]of colors.entries()){

console.log(`${color} is placed index: ${index}`);

}
// output:
// red is placed index: 0
// green is placed index: 1
// blue is placed index: 2
// orange is placed index: 3

// let user  = {
//     'name':'john',
//     'score':54
// }

// for (const data of user) {

//     console.log(data);
// }

// output:
// TypeError: user is not iterable


let user  = [
    { 'name':'john','score':4},
    { 'name':'leena','score':5},
    { 'name':'sena','score':8},
    { 'name':'kina','score':9},

]


for (const {name} of user) {

    console.log(name);
}

// output:
// john
// leena
// sena
// kina


const names = 'Jay Shree RAM'
for (const letter of names) {
    console.log(`${letter} is placed at`,names.indexOf(`${letter}`));
}

// output:
// J
// a
// y

// S
// h
// r
// e
// e

// R
// A
// M

let f = ['g','h','h'];
console.log(f.indexOf('h'));
