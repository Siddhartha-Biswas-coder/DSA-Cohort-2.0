var mySqrt = function (x) {
    let i = 0 
    for (; i * i <= x; i++) {
        if (i * i === x) return i

    }
    return i - 1
};