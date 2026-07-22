var mySqrt = function (x) {
    let i = 0 
    for (; i * i <= x; i++) {
        if (i * i === x) return i

    }
    return i - 1
};


var solve = (x, n) => {
    if (n === 0) return 1.0
    let ans = solve(x, Math.floor(n / 2))
    return (n % 2 === 0) ? ans * ans : ans * ans * x
}


var myPow = function (x, n) {
    if (n === 0) return 1.0
    return (n < 0) ? 1 / solve(x, -n) : solve(x, n)
};


var mySqrt = function (x) {
    let first = 0, last = x;
    let ans = first
    while (first <= last) {
        let mid = Math.floor((first + last) / 2)
        if (mid * mid <= x) {
            ans = mid
            first = mid + 1
        }
        if (mid * mid > x) last = mid - 1
    }
    return ans
};