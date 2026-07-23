/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let j = 0, k = nums.length - 1, i = 0
    while (i <= k) {
        if (nums[i] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
            i++
        }
        else if (nums[i] === 2) {
            [nums[i], nums[k]] = [nums[k], nums[i]]
            k--
        } else {
            i++
        }
    }
};