function countAsterisks(s) {
  let words = s.split("|")
  let count = 0
  for (let i = 0; i < words.length; i = i + 2) {
    for (let j = 0; j <= words[i].length; j++) {
      if (words[i].charAt(j) === "*") count++
    }
  }
  return count
}


class Solution {
  /**
   * @param {string} s
   * @param {string} letter
   * @returns {number}
   */
  percentageLetter(s, letter) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === letter) count++
    }
    return Math.round((count / s.length) * 100)
  }
}
