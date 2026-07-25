/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var solve = function (nums, target, first, last, isStarting) {
    let ans = -1
    while (first <= last) {
        let mid = Math.floor((first + last) / 2)
        if (nums[mid] === target) {
            ans = mid
            if (isStarting) last = mid - 1
            else first = mid + 1
        } else if (nums[mid] < target) first = mid + 1
        else last = mid - 1
    }
    return ans
}

var searchRange = function (nums, target) {
    let ans = []
    ans.push(solve(nums, target, 0, nums.length, true))
    ans.push(solve(nums, target, 0, nums.length, false))
    return ans
};