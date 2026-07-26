/**
* @param {number[]} arr
* @param {number} k
* @return s {number}
*/

class Solution {
	
	findMinimum(arr, k, first, last, ans) {
		if (first > last) return ans
		let mid = Math.floor((first + last)/2)
		let count = 1, sum = 0
		for (let i = 0 ; i < arr.length ; i++) {
			sum += arr[i]
			if (sum > mid) {
				count++
				sum = arr[i]
			}
		}
		if (count <= k) {
			ans = mid
			return this.findMinimum(arr, k, first, mid - 1, ans)
			
		}
		return this.findMinimum(arr, k, mid + 1, last, ans)
	}
	
	findPages(arr, k) {
		let ans = -1
		if (k>arr.length) return ans
		let low = Math.max(...arr)
		let high = arr.reduce((a, b) => a + b, 0)
		return this.findMinimum(arr, k, low, high, ans)
	}
	
}