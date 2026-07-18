let prompt = require("prompt-sync")();

let n = Number(prompt("Entr a number: "));

hello(n);
function hello(n) {
  if (n == 0) return;
  console.log("Hello world");
  hello(n - 1);
}


function naturalNumbers(n) {
    if (n === 0) return;
    naturalNumbers(n - 1)
    process.stdout.write(n + " ")
}

module.exports = naturalNumbers;


function printNumbers(n) {
    if (n === 0) return
    process.stdout.write(n + " ")
    printNumbers(n - 1)
}

module.exports = { printNumbers };

function sumUpToN(n) {
    if (n === 0) return 0
    return n + sumUpToN(n - 1)

}

module.exports = { sumUpToN };
