/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for (var i = 0 ; i < nums.length ; i++) {
        for (var j = 0 ; j < nums.length - i -1;j++) {
            if (nums[j] > nums[j+1]) {
                var temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }

    return nums
};
var sortArray = function(nums) {
    if (nums.length <= 1) return nums
    var mid = Math.floor(nums.length/2)
    var midArr = nums.splice(mid,1)[0]
    var left = []
    var right = []
    for (var i = 0 ; i < nums.length ; i++) {
        if (nums[i] > midArr) {
            right.push(nums[i])
        } else {
            left.push(nums[i])
        }
    }

    return sortArray(left).concat([midArr]).concat(sortArray(right))
};
// @lc code=end

