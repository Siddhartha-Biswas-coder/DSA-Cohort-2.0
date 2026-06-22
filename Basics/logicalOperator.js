function findGreatest(a, b) {
    // Write your code here
    return a > b ? a : b
}

// module.exports = { findGreatest };

function checkEvenOrOdd(num) {
    // Write your logic here
    return num % 2 === 0 ? "Even" : "Odd"

}

// module.exports = { checkEvenOrOdd };

function checkVoterEligibility(name, age) {
    // Write your logic here

    return `${name} is${age>=18? "":" not"} a valid voter.`
    
}

function isLeapYear(year) {
    // Write your logic here
    return `${((year % 4 === 0 && (year % 100 !== 0 || year % 2 !== 0)) || year % 400 === 0) ? "" : "Not a "}Leap Year`

}

function calculateFinalAmount(amount) {
    // Write your logic here

    const finalAmount = (discount) => {
        return (1 - (discount / 100)) * amount
    }

    if (amount > 0 && amount <= 5000) {
        return (finalAmount(0))
    }
    if (amount > 5000 && amount <= 7000) {
        return (finalAmount(5))
    }
    if (amount > 7000 && amount <= 9000) {
        return (finalAmount(10))
    }
    return finalAmount(20)

}

function calculateElectricityBill(unit) {
    let bill = 0;

    if (unit <= 100) {
        bill = unit * 4.2;
    } else if (unit <= 200) {
        bill = (100 * 4.2) + ((unit - 100) * 6);
    } else if (unit <= 400) {
        bill = (100 * 4.2) +
               (100 * 6) +
               ((unit - 200) * 8);
    } else {
        bill = (100 * 4.2) +
               (100 * 6) +
               (200 * 8) +
               ((unit - 400) * 13);
    }

    return bill.toFixed(1);
}


function findGreatest(a, b, c) {
    // Write your logic here
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c

}


class Solution {
    get_movie_status(ratingStr) {
        if (ratingStr >= 0.0 && ratingStr <= 2.0) return "Flop"
        if (ratingStr > 2.0 && ratingStr <= 3.4) return "Semi-hit"
        if (ratingStr > 3.4 && ratingStr <= 4.5) return "Hit"
        if (ratingStr > 4.6 && ratingStr <= 5.0) return "Super Hit"

    }
}