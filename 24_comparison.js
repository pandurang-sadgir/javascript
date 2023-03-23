// comparison operator in javascript 

// < ,> <=,>=, ==, !=,=== !==


// Number comparison 
// less than operator <

let num1 = 10,
    num2 = 20;

    console.log(num1 > num2);
    // false
    console.log(num1 < num2);
    // true
    console.log(num1 <= num2);
    // true
    console.log(num1 >= num2);
    // false
    console.log(num1 == num2);
    // false
    console.log(num1 != num2);
    // true
    console.log(num1 !== num2);
    // true
    console.log(num1 === num2);
    // false
    

    // comparing number with other values 
    console.log(`Comparing number with other data types `);
    let number1 = 0;
    console.log(0 == null);
    // false
    console.log(0 == undefined);
    // false
    console.log(0 == '0');
    // true

    let convertNum = Number('0');
    console.log(convertNum,`Its type is ${typeof convertNum}`);
    // 0 Its type is number;

    console.log(0 === '0');
    // false
    console.log(0 != '0');
    // false

    console.log(0 !== '0');
    // true


    console.log(`comparing object`);

    let apple = {
        'color':'red',
        'price':100,
        valueOf:function (){
            return 20;
        }
    }

    let mango = {
        'color':['red','yellow','orange'],
        'price':100,
        toString:function (){
            return 40;
        }
    }

console.log(`Which is buy more apple or orange`);
if(apple>mango){
    console.log(`client buy apple more`);
}else{
    console.log(`yep client buy mango  more`);

}

// output:
// Which is buy more apple or orange
// yep client buy mango  more


    // let a= Number(null);
    // console.log(a);
    // 0


console.log(true === true)



