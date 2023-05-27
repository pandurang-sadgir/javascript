// Q.6 - Take range (0,20) and create an array of square of  all odd numbers

const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

    const range = arrayRange(0,20,1);
    console.log(range);
    
    let squareOfOddNumber = [];

    for (const num of range) {

        if(num % 2 !== 0){
            squareOfOddNumber.push(num*num)

        }
        
    }
    console.log(`Square of odd number ${squareOfOddNumber}`);

    // output
    // Square of odd number 1,9,25,49,81,121,169,225,289,361