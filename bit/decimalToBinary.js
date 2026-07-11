let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

let ans = "";

while (n > 0) {
  let bit = n % 2;
  ans = bit + ans;
  n = Math.floor(n / 2);
}
