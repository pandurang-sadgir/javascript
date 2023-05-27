// Q.8 Let say a school has following grade system. 
// a.Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A
// Now enter student marks and print his grade accordingly.


const studentMarks = 98;
if(studentMarks<25){
    console.log(`The student has gained below 25  marks: Grade is : F`);
}else if(studentMarks>=25  && studentMarks<=45){
    console.log(`The student has gained  25 to 45 marks: Grade is : E`);
}else if(studentMarks>=45  && studentMarks<=50){
    console.log(`The student has gained  45 to 50 marks: Grade is : D`);
}else if(studentMarks>=50  && studentMarks<=60){
    console.log(`The student has gained  60 to 80 marks: Grade is : C`);
}else if(studentMarks>=60  && studentMarks<=80){
    console.log(`The student has gained  60 to 80 marks: Grade is : B`);

}else {
    console.log(`The student has gained above 80 marks: Grade is : A`);

}
// output:
// The student has gained above 80 marks: Grade is : A