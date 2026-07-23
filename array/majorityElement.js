var majorityElement = function (nums) {
    let hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1)
    }

    let max = 0, num = 0
    for (let [key, value] of hashMap) {
        if (value > max) {
            max = value
            num = key
        }
    }

    return num
};