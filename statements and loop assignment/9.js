// Q.9 - Student won’t be allowed to sit in exam if his/her attendance is less than 75%.
// give no of class he has attended then print if he is eligible to sit in exam or not.
// Total number of classes are 50
// If student enter attended class more than 50 then print you are lying. 


let noOfClassesAttend = 38;
let totalClasses = 50;
const attendancePercentage = noOfClassesAttend/totalClasses*100;
console.log(attendancePercentage);

if(noOfClassesAttend>totalClasses){
    console.log(`You are lying`);
    
}
else if(attendancePercentage>=75){
    console.log(`You are  eligible to sit in exam:
    Total classes have attended : ${noOfClassesAttend}
    Percentage : ${attendancePercentage}%`)
}else{
    console.log(`You are not eligible to sit in exam`);
}

// output:
// You are  eligible to sit in exam:
//     Total classes have attended : 38
//     Percentage : 76%
