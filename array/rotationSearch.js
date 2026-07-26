/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var binarySearch = function (nums, first, last, target) {
    if (first > last) return -1
    let mid = Math.floor((first + last) / 2)

    if (nums[mid] === target) return mid

    if (nums[mid] >= nums[first]) {
        if (target >= nums[first] && target < nums[mid]) {
            return binarySearch(nums, first, mid - 1, target)
        } else {
            return binarySearch(nums, mid + 1, last, target)
        }
    }

    else {
        if (target > nums[mid] && target <= nums[last]) {
            return binarySearch(nums, mid + 1, last, target)
        } else {
            return binarySearch(nums, first, mid - 1, target)
        }
    }
}


var search = function (nums, target) {
    return binarySearch(nums, 0, nums.length - 1, target)
};