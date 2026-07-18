let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

let first = 0,
  second = 1;
let sum = first + second;

process.stdout.write(first + " " + second + " ");

// for (let i = 1; i <= n - 2; i++) {
//   let third = first + second;
//   process.stdout.write(third + " ");
//   first = second;
//   second = third;
// }

function fibo(n, first, second) {
  if (n === 0) return;
  let third = first + second;
  process.stdout.write(third + " ");
  fibo(n - 1, second, third);
}

fibo(n - 2, first, second);
