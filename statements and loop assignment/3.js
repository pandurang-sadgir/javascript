// Q.3 - take an array from range(1,50) and print ‘haha’ for numbers which are multiple of 3. print ‘hehe’ for numbers which are multiple of 5. print ‘heha’ for numbers which are multiple of both 3 and 5. print numbers which are neither multiple of 5 nor multiple of 3.

const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );


let orderList = arrayRange(1,50,1);
// console.log(orderList);

for (const number of orderList) {
    if(number % 3 === 0 && number %5 ===0 ){
        console.log(number,': heha');
    }else if(number % 3 === 0){
        console.log(number,': haha');
    }else if(number % 5 === 0){
        console.log(number,': hehe');
    }else{
        console.log(number);
    }
    
}

// output:
$ node statements\ and\ loop\ assignment/3.js 
// 1
// 2
// 3 : haha
// 4
// 5 : hehe
// 6 : haha
// 7
// 8
// 9 : haha
// 10 : hehe
// 11
// 12 : haha
// 13
// 14
// 15 : heha
// 16
// 17
// 18 : haha
// 19
// 20 : hehe
// 21 : haha
// 22
// 23
// 24 : haha
// 25 : hehe
// 26
// 27 : haha
// 28
// 29
// 30 : heha
// 31
// 32
// 33 : haha
// 34
// 35 : hehe
// 36 : haha
// 37
// 38
// 39 : haha
// 40 : hehe
// 41
// 42 : haha
// 43
// 44
// 45 : heha
// 46
// 47
// 48 : haha
// 49
// 50 : hehe

// 91826@DESKTOP-3PG360P MINGW64 /h/Ultimate JavaScript (master)