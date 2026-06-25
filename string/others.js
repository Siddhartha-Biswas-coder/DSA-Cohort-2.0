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

function checkString(s) {
  let seenB = false
  for (let ch of s) {
    if (ch === "b") seenB = true
    else if (ch === "a" && seenB) return false
  }
  return true
}

class Solution {
  /**
   * @param {string} password
   * @return {boolean}
   */
  strongPasswordCheckerII(password) {
    if (password.length < 8) return false

    const special = new Set("!@#$%^&*()_+".split(""))

    let hasLower = false, hasUpper = false, hasDigit = false, hasSpecial

    for (let i = 0; i < password.length; i++) {
      let ch = password.charAt(i)

      if (i > 0 && ch === password.charAt(i - 1)) return false

      if (ch >= "A" && ch <= "Z") hasUpper = true

      if (ch >= "a" && ch <= "z") hasLower = true

      if (ch >= "0" && ch <= "9") hasDigit = true

      if (special.has(ch)) hasSpecial = true
    }

    return hasUpper && hasLower && hasDigit && hasSpecial
  }
}

function greatestLetter(s) {

  if (s.length === 0) return ""
  let array = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i)
    if (ascii >= 97 && ascii <= 122) array[ascii - 97] |= 1;
    else if (ascii >= 65 && ascii <= 90) array[ascii - 65] |= 2;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 3) {
      return String.fromCharCode(i + 65)
    }
  }

  return "";
}



class Solution {
  checkDistances(s, distance) {
    if (s.length === 0) return true
    let array = new Array(26).fill(-1)
    let n = s.length
    for (let i = 0; i < n; i++) {
      let ascii = s.charCodeAt(i)
      if (array[ascii - 97] === -1) {
        array[ascii - 97] = i
      } else if (array[ascii - 97] !== -1 && (i - array[ascii - 97] - 1 !== distance[ascii - 97])) {
        return false
      }
    }
    return true
  }
}



class Solution {
  largestGoodInteger(num) {
    let n = num.length
    if (n <= 2) return ""
    let max = ""
    let prevCh = num.charAt(0)
    let count = 1
    for (let i = 1; i < n; i++) {
      let curCh = num.charAt(i)
      if (curCh === prevCh) {
        count++
        if (count === 3 && curCh > max) {
          max = curCh
        }
      } else if (curCh !== prevCh) {
        count = 1
        prevCh = curCh
      }
    }
    return (max) ? max + max + max : "";
  }
}


class Solution {
  removeDigit(number, digit) {
    let maxNumber = ""
    for (let i = 0; i < number.length; i++) {
      if (number.charAt(i) === digit) {
        let newNumber = number.substring(0, i) + number.substring(i + 1, number.length)
        if (maxNumber < newNumber) maxNumber = newNumber
      }
    }
    return maxNumber
  }
}

class Solution {
    /**
     * @param {string} num
     * @return {boolean}
     */
    digitCount(num) {
        // let l = num.length
        // for (let i = 0; i < l; i++) {
        //     let count = 0
        //     for (let j = 0; j < l; j++) {
        //         if (Number(num.charAt(j)) === i) count++
        //     }
        //     if (count !== Number(num.charAt(i))) return false
        // }
        // return true

        let freq = new Array(num.length).fill(0)

        for (let ch of num) {
            freq[ch]++
        }

        for (let i = 0; i < num.length; i++) {
            if (Number(num.charAt(i)) !== freq[i]) return false
        }

        return true

    }
}

class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    removeAnagrams(words) {
        let results = []

        for (let word of words) {
            if (results.length === 0 ||
                this.getFrequency(results[results.length - 1]) !== this.getFrequency(word)) {
                results.push(word)
            }
        }

        return results
    }

    getFrequency(word) {
        let array = new Array(26).fill(0)

        for (let ch of word) {
            array[ch.charCodeAt(0) - 97]++
        }

        return array.join("#")
    }
}



class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    digitSum(s, k) {
        while (s.length > k) {
            let newString = ""
            for (let i = 0; i < s.length; i += k) {
                let sum = 0
                for (let j = i; j < Math.min(i + k, s.length); j++) {
                    sum += Number(s.charAt(j))
                }
                newString += sum
            }
            s = newString
        }
        return s
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    areNumbersAscending(s) {
        let max = ""
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) >= "1" && s.charAt(i) <= "9") {
                if (max < s.charAt(i)) {
                    max = s.charAt(i)
                } else {
                    return false
                }
            }
        }
        return true
    }
}

class Solution {
    /**
     * @param {string} word
     * @param {string} ch
     * @return {string}
     */
    reversePrefix(word, ch) {
        let newWord = ""
        for (let i = 0; i < word.length; i++) {
            if (word.charAt(i) === ch) {
                for (let j = i; j >= 0; j--) {
                    newWord += word.charAt(j)
                }
                for (let j = i + 1; j < word.length; j++) {
                    newWord += word.charAt(j)
                }
                return newWord
            }
        }
        return word

    }
}


