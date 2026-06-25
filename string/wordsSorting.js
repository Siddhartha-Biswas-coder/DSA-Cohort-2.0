function sortSentence(s) {
  s = s.split(" ")
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 0; j < s.length - 1 - i; j++) {
      if (s[j] > s[j + 1]) {
        let temp = s[j]
        s[j] = s[j + 1]
        s[j + 1] = temp
      }
    }
  }
  return s.join(" ");
}