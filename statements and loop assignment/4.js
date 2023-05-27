// Q.4 - for a range (0,50). if a number is less than 10 do nothing. if greater than 10 print number. but if number  equal to 30 exit the loop.


const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );


    let orderList = arrayRange(0,50,1);
    // console.log(orderList);

    for (const num of orderList) {
        
        if(num === 30){
            break;
        }else if(num >10){
            console.log(num);

        }
        
    }

// output:
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
