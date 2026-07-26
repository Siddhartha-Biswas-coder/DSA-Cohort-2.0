/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var speed = function (piles, h, first, last, ans) {
    if (first > last) return ans
    let mid = Math.floor((first + last) / 2)
    let totalHours = 0
    let i = 0
    while (i < piles.length) {
        let current = piles[i]
        totalHours += Math.floor((current + mid - 1) / mid)
        i++
    }
    if (totalHours <= h) {
        ans = mid
        return speed(piles, h, first, mid - 1, ans)
    }
    return speed(piles, h, mid + 1, last, ans)
}

var minEatingSpeed = function (piles, h) {
    let ans = -1
    let last = Math.max(...piles)
    return speed(piles, h, 1, last, ans)
};