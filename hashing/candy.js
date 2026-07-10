class Solution {

    possible(freq, children, k) {
        let total = 0

        for (let f of freq) {
            total += Math.min(f, children)
        }

        return total >= children * k
    }

    distributeCandies(n, k, candies) {
        let map = new Map()

        for (let candy of candies) {
            map.set(candy, (map.get(candy) || 0) + 1)
        }

        let freq = [...map.values()]

        let low = 0;
        let high = Math.floor(n / k)
        let ans = 0

        while (low <= high) {
            const mid = Math.floor((low + high) / 2)

            if (this.possible(freq, mid, k)) {
                ans = mid;
                low = mid + 1
            } else {
                high = mid - 1
            }
        }

        return ans


    }
}

module.exports = Solution;
