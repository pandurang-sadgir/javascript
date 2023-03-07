// The javaScript is dynamic programming langauge

var counter = 100;
console.log('currrent value of counter variable is :',counter);
console.log('The current type of counter is :',typeof(counter));
counter = 'hundred';
console.log('currrent value of counter variable is :',counter);
console.log('The current type of counter is :',typeof(counter));

counter = true;
console.log('currrent value of counter variable is :',counter);
console.log('The current type of counter is :',typeof(counter));

counter = undefined;
console.log('currrent value of counter variable is :',counter);
console.log('The current type of counter is :',typeof(counter));

counter = null;
console.log('currrent value of counter variable is :',counter);
console.log('The current type of counter is :',typeof(counter));


// output
// $ node 2_dynamicJs.js
// currrent value of counter variable is : 100
// The current type of counter is : number
// currrent value of counter variable is : hundred
// The current type of counter is : string
// currrent value of counter variable is : true
// The current type of counter is : boolean
// currrent value of counter variable is : undefined
// The current type of counter is : undefined
// currrent value of counter variable is : null
// The current type of counter is : object

// To get current type of variable we use typeof operator.

