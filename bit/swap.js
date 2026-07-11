let prompt = require("prompt-sync")();

let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("a: ", a);
console.log("b: ", b);
