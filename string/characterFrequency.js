function characterFrequency(str) {
    let array = new Array(128).fill(0)
    str = str.split(" ").join("")
    let n = str.length
    for (let i = 0; i < n; i++) {
        let ascii = str.charCodeAt(i)
        array[ascii]++

    }
    array.forEach((element, ascii) => {
        if (element !== 0) {
            console.log(`${String.fromCharCode(ascii)} : ${element}`)
        }

    })
}