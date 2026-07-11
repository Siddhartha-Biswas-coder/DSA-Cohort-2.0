let prompt = require("prompt-sync")();
let bin = Number(prompt("Enter a number: "));
let deci = 0;
let count = 0;

while (bin > 0) {
  let bit = bin % 10;
  deci = deci + bit * Math.pow(2, count);
  bin = Math.floor(bin / 10);
  count++;
}

console.log(deci);
