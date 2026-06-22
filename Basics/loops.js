class Solution {
    printNumbers(n) {
        let array = []
        for (let i = 1; i <= n; i++) {
            array = [...array, i]
        }
        return array
    }
}

function printNumbers(n) {
    if (n === 0) return
    process.stdout.write(n + " ")
    printNumbers(n - 1)

}
function sumUpToN(n) {
    if (n === 0) return 0
    return n + sumUpToN(n - 1)

}

function factorial(n) {
    let f = 1
    for (let i = 1; i <= n; i++) {
        f = f * i
    }
    console.log(f)

}

function printFactors(n) {
    for(let i = 1 ; i<=n ; i++ ){
        if (n%i === 0){
            process.stdout.write(i+" ")
        }
    }
    
}

function sumEvenOddInRange(start, end) {
    // Write your logic here
    if (start > end) {
        start = start + end;
        end = start - end
        start = start - end
    }

    let evenSum = 0;
    let oddSum = 0

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenSum += i
        } else {
            oddSum += i
        }
    }

    return [evenSum,oddSum]
}

function calculatePower(a, b) {
    // Write your logic here
    if (b === 0) return 1
    return a * calculatePower(a, b - 1)
}

function isPrime(n) {
    // Write your logic here
    if (n <= 1) return "Not Prime"
    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            return "Not Prime"
        }
    }
    return "Prime"

}

const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1)
}

function isStrongNumber(n) {
    // Write your logic here
    let a = n
    let sum = 0
    while (a > 0) {
        let d = a % 10
        sum += factorial(d)
        a = Math.floor(a / 10)
    }

    return (n === sum) ? "Yes" : "No"
}

function isPrime(n) {
    // Write your logic here
    if (n <= 1) return "Not Prime"
    if (n === 2) return "Prime"
    if (n % 2 === 0) return "Not Prime"
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return "Not Prime"
        }
    }
    return "Prime"

}

function reverseNumber(n) {
    let rev = 0
    while (n > 0) {
        let d = n % 10;
        rev = (rev * 10) + d
        n = Math.floor(n / 10)
    }
    return rev
}
