// logical operaor

// logical not operator 

let firstValue = true ;
    secondValue = false;
    console.log(`The first value is : ${!firstValue}`);
    // The first value is : false
    console.log(`The second value is : ${!secondValue}`);
    // The second value is : true


    console.log(!`hello`);
    // false
    console.log(!null);
    // true
    console.log(!'');
    // true
    console.log(!'');
    // true
    console.log(!{});
    false
    console.log(Boolean({}));
    // true
    console.log(Boolean(!undefined));
    // true

    let a = 0; 
    if(!a){
        console.log('hi..there');
        
    }
    // hi..there

    
    // Double negation operator !! operand;

    console.log(`Double negation operator`);
    let num = 10;
    console.log(`The not operator result is : ${!num}`);
    console.log(`The double negation operator result is : ${!!num}`);

    // output
    // The not operator result is : false
    // The double negation operator result is : true


    // logical and operator &&

    console.log(true && true && true);
    // true
    console.log(true && false);
    // false

    console.log(1/0);

    console.log(Boolean(Infinity));
    
    // 

    // 
    // chain of logical operator 

    let age = 18,
        location = 'nashik',
        percentage = 80;

        if(age>=18 && location =='nashik' && percentage>=80){
            console.log(`You are eligible for placement drive`);
        }
        else {
            console.log(`You are not eligible for drive,Try next time`);
        }

        // You are eligible for placement drive


        // logical or operator
        

        console.log(typeof(null));
        console.log(+'10');
        console.log(typeof(NaN));
        console.log('a'*'a');

        console.log(true || false || true || true || false);
        // true
        console.log(false || false);
        // false

        console.log(2**5*(5*5)/2*2-10+2);

        console.log(false && true && false );

        console.log(`operator precedence`);
        console.log((true && false) || !true );
        // output:
        // false

        if((true && true) || !true ){
            console.log(`Bracket is used`);
        }else {
            console.log(`Bracket not used`);
        }

        // output
        // Bracket is used