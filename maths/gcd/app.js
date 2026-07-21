let prompt = require("prompt-sync")();

let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter b number: "));

function gcd(a, b) {
  if (b===0) return a;
  return gcd(b,a%b)
}

// function gcd(a, b) {
//   if (a === b) return a;
//   if (a > b) return gcd(a - b, b);
//   if (a < b) return gcd(a, b - a);
// }

// while (a != b) {
//   if (a > b) a = a - b;
//   else b = b - a;
// }

// console.log(a);
console.log(gcd(a, b));
