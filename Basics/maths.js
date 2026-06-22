// Math.abs(); // -5 => 5 , 5 => 5
// Math.cell(); // 10 => 10 , 10.2 => 11
// Math.floor(); // 10.9 => 10 , 10 => 10
// Math.round(); // 10.4 => 10 , 10.5 => 11 , 10.6 => 11
// Math.trunc(); //10.5 => 10 //10.9 => 10 // removes decimal
// Math.pow(); // pow(2,3) => 8
// Math.sqrt(); // sqrt(4) => 2
// Math.cbrt(); //cbrt(9) => 3
// Math.max(); //max(1,2,3,4) => 4 // max value
// Math.min(); // min(1,2,3,4) => 1 //min value
// Math.random(); // gives between [1,0)
// .toFixed gives upto n decimal place

// generate OTP

const OTP = Math.trunc(Math.random() * 9999);

console.log(OTP);


function calculateCompoundInterest(P, r, t, n) {
    let compoundInterest = (P * (Math.pow((1 + (r / n)), (n * t)) - 1)).toFixed(2);

    return compoundInterest;
}

function swapNumbers(a, b) {
    // Write your logic here
    a = a + b
    b = a - b
    a = a - b
    return [a, b]

}

function calculateTriangleArea(a, b, c) {
    // Write your logic here
    const s = (a + b + c) / 2
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area.toFixed(2)
}

function calculateCircleProperties(r) {
    let circumference = 2 * Math.PI * r
    let area = Math.PI * (Math.pow(r, 2))
    return [circumference.toFixed(2), area.toFixed(2)]
}

