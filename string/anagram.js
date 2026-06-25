function isAnagram(s1, s2) {
    let array = new Array(26).fill(0)
    if (s1.length !== s2.length) return false
    for (let i = 0; i < s1.length; i++) {
        let ascii = s1.charCodeAt(i)
        array[ascii - 97]++
    }
    for (let i = 0; i < s2.length; i++) {
        let ascii = s2.charCodeAt(i)
        array[ascii - 97]--
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) return false
    }
    return true
}