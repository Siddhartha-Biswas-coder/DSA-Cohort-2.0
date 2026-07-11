let prompt = require("prompt-sync")();

let a = Number(prompt("Enter a: "));

if ((a & (a - 1)) === 0) {
  console.log(a, " is power of 2");
} else {
  console.log(a, " is not a power of 2");
}
