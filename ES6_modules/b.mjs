import {sum as total,userName as name} from './a.mjs'
let education = 'engg'
let result = total(1000,1000);
console.log(result);
console.log(name);

// export {total,name as userKaNAME}
export * from './a.mjs';
