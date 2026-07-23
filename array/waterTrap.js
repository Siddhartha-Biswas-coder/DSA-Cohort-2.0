/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let totalWater = 0
    for (let i = 0; i < height.length; i++) {
        let leftMax = height[i], rightMax = height[i]
        for (let j = i; j >= 0; j--) {
            if (height[j] > leftMax) {
                leftMax = height[j]
            }
        }
        for (let j = i; j < height.length; j++) {
            if (height[j] > rightMax) {
                rightMax = height[j]
            }
        }

        totalWater += Math.min(leftMax, rightMax) - height[i]
    }
    return totalWater

};


var trap = function (height) {
    let left = new Array(height.length)
    let right = new Array(height.length)
    let totalWater = 0, leftMax = height[0], rightMax = height[height.length - 1]
    for (let i = 0; i < height.length; i++) {
        left[i] = Math.max(height[i], leftMax)
        leftMax = left[i]
    }
    for (let i = height.length - 1; i >= 0; i--) {
        right[i] = Math.max(height[i], rightMax)
        rightMax = right[i]
    }

    for (let i = 0; i < height.length; i++) {
        totalWater += Math.min(left[i], right[i]) - height[i]
    }

    return totalWater

};

var trap = function (height) {
    let totalWater = 0, left = 0, right = height.length - 1
    let leftMax = 0, rightMax = 0
    while (left <= right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])

        if (leftMax < rightMax) totalWater += leftMax - height[left++]
        else totalWater += rightMax - height[right--]
    }

    return totalWater

};

var maxArea = function (height) {
    let maxArea = 0
    let i = 0, j = height.length-1
    while (i < j) {
        let length = Math.min(height[i], height[j])
        let breadth = j - i
        let area = length * breadth
        maxArea = Math.max(maxArea, area)
        if (height[i] < height[j]) i++ 
        else j--
    }
    return maxArea
};