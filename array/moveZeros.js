function moveZerosToEnd(arr) {
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            j++
        }
    }
    return arr

}

function moveZerosToEnd(arr) {
    let i = 0
    let j = 0
    while (arr[i] === 0 && i < arr.length) {
        i++
    }
    while (i < arr.length) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            j++
        }
        i++
    }
    return arr

}