let user = {
    'firstName':'ram',
    'lastName':'suryavanshi'
}

let firstName = user.firstName,
    lastName = user.lastName;
    console.log(`user first name is : ${firstName} and user last name is ${lastName}`);

    // using es6 to se structure the property of an object to variable


    let {firstNames:fName,lastName:lName} = user;
    console.log(`uisng the ES6 ${fName} ${lName}`);

    let client = {
        'firstNameOfClient':'jonny',
        'jobRole':'full stack developer'
    }

    let {firstNameOfClient,jobRole} = client;
    console.log(firstNameOfClient,jobRole,'using es6 syntax');

    let user1 = {
        'firstNameu':'jack',
        'lastNameu':'sparrow',
        'salary':255,
        ageOfUser:33333
    }
    

    console.log(user1);

    let {firstNameu,lastNameu,salary=50,ageOfUser:age} = user1;
    console.log(firstNameu,lastNameu,salary,age);

    // output:
    // jack sparrow 50
    console.log(user1);
// output:
// jack sparrow 255 33333
// {
//   firstNameu: 'jack',
//   lastNameu: 'sparrow',
//   salary: 255,
//   ageOfUser: 33333
// }

let h = null;
console.log(h)
console.log(typeof h
    )

    // de structuring the null object 
    function kk (){
        return null;
    }


    let [a=11,b=55] = kk() || [];
    console.log(a,b);

    // destructuring the nested object 
    console.log(`Nested object`)
    let person = {
        'id' : 10,
        'name':{
            'firstNamel':'john',
            'lastNamel':'linawhite'
        }

    }

let {name:{firstNamel,lastNamel}} =  person;
console.log(firstNamel,lastNamel);
// output:
// john linawhite


let ouser = {
    'firstName':'a',
    'lastName':'b'
}
paddy();

let userDetail = ({firstName,lastName})=>{
    console.log(`The user full Name is ${firstName} ${lastName}`);
}
userDetail(ouser);
console.log(ouser);

function paddy (){
    console.log('the function is called paddy')
}




    // console.log(person.name.firstName);
    // let []=person;

    // let r= [1,2,34];
    // let [,,y]= r;
    // console.log(y);
    // 34