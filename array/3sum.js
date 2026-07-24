/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

var threeSum = function (nums) {
    let ans = []
    nums = bubbleSort(nums)
    for (let i = 0; i < nums.length - 2; i++) {
        if (i != 0 && nums[i - 1] === nums[i]) continue
        let j = i + 1, k = nums.length - 1
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                let temp = [nums[i], nums[j], nums[k]]
                ans.push(temp)
                j++
                k--
                while (j < k && nums[j - 1] === nums[j]) j++
                while (j < k && nums[k + 1] === nums[k]) k--
            }
            else if (sum < 0) j++
            else k--
        }
    }
    return ans

};