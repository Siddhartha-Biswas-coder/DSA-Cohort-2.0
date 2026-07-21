// /**
//  * @param {number} n
//  * @return {number}
//  */
// var isPrime = function (n) {
//     if (n <= 1) return false
//     if (n === 2) return true
//     if (n % 2 === 0) return false
//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         if (n % i === 0) return false
//     }
//     return true
// }

// var countPrimes = function (n) {

//     let count = 0
//     for (let i = 2; i < n; i++) {
//         if (isPrime(i)) count++
//     }
//     return count
// };

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let prime = new Array(n + 1).fill(true);
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (prime[i]) {
    for (let j = i * i; j <= n; j += i) {
      prime[j] = false;
    }
  }
}

let count = 0;
for (let i = 2; i <= n; i++) {
  if (prime[i]) count++;
}

console.log(count);
