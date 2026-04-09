export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}


import {add,sub} from './test6.js';

console.log(add(5,3));
console.log(sub(5,3));