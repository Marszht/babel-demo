import "core-js";
let a = {
  name: "mars"
}
const arr = [1,2,3]

console.log(...arr);
let b = {...a, name: "sss"}
console.log(b);

const fun =  (...arg) => {
  console.log(...arg);
}
Promise.resolve().finally()
fun({...a, age: "18"})

class Person {
 constructor() {
  this.person = {
    name: "zht",
    age: "18"
  }
 } 
}