export let  msg ='This is let keyword export';
export var  msg1 ='This is var keyword export';
export const  msg2 ='This is const keyword export';
 let  msg3 ={'a':10};
console.log(`The array from message`,msg3);
console.log('welcome to javascript');
 function user() {
    console.log(`The function is executed from message module`);
  }



setTimeout(()=>{
  console.log(msg3)},1000);

  let username  = 'hi';
  export {username};
  function changeName(user){
    username = user;
  }
  // export {};
  // export {}
  export {changeName,user,msg3};
