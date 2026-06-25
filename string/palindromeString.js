function isPalindromeInPlace(str) {
    let i = 0, j = str.length - 1
    while (i <= j) {
        if (str.charAt(i) !== str.charAt(j)) {
            return "No"
        }
        i++; j--
    }
    return "Yes"
}


var isPalindrome = function (s) {
    s = s.toLowerCase()
    s = s.replace(/[^a-z0-9]/g, "");
    let i = 0;
    let j = s.length - 1
    while (i <= j) {
        if (s.charAt(i) !== s.charAt(j)) {
            return false
        }
        i++;
        j--;
    }
    return true
};

