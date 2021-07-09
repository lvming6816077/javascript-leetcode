/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement1 = function(nums) {
    for (var i = 0 ; i < nums.length ; i++) {
        var min2 = nums[i-1]==undefined ?  -Number.MAX_SAFE_INTEGER : nums[i-1]
        var min = nums[i+1]==undefined ?  -Number.MAX_SAFE_INTEGER : nums[i+1]
        if (nums[i] > min && nums[i] > min2) {

            return i
        }
    }

    return null
};
var findPeakElement1 = function(nums) {
    var left = 0, right = nums.length-1

    while (left < right) {
        var mid = parseInt(left + (right-left) /2)
        if (nums[mid] > nums[mid+1]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
};
var findPeakElement = function(nums) {
    var left = 0 , right = nums.length-1

    while(left <right) {

        var mid = parseInt(left + (right-left) /2)

        if (nums[mid] > nums[mid+1]) {
            right = mid
        } else {
            left = mid +1
        }
    }

    console.log(left,right)

    return left
}
// @lc code=end

