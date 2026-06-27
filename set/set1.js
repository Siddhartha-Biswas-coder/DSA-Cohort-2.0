var repeatedCharacter = function (s) {
    let set = new Set()
    for (let i = 0; i < s.length; i++) {
        if (set.has(s.charAt(i))) return s.charAt(i)
        else set.add(s.charAt(i))
    }
};