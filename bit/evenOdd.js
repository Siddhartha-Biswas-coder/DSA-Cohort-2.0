let prompt = require("prompt-sync")();

let num = Number(prompt("Enter: "));

console.log(((num & 1) === 0) ? "Even" : "Odd");
