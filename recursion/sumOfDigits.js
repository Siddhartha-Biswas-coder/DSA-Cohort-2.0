let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

function SOD(n) {
  if (n === 0) return 0;

  return (n % 10) + SOD(Math.floor(n / 10));
}

console.log(SOD(n));
