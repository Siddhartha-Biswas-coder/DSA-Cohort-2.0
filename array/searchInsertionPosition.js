/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var binarySearch = function (nums, first, last, target) {
    if (first > last) return first
    let mid = Math.floor((first + last) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] > target) return binarySearch(nums, first, mid - 1, target)
    return binarySearch(nums, mid + 1, last, target)
}

var searchInsert = function (nums, target) {
    return binarySearch(nums, 0, nums.length - 1, target)
};