/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var j = 0
    for (var i = 1 ; i < nums.length ; i++) {
        if (nums[i] == nums[i-1]) {
            
        } else {
            j++
            nums[j] = nums[i]
            
        }
    }

    return j+1
};
var removeDuplicates = function(nums) {
    var wright = 0,read = 1

    while(read < nums.length) {
        if (nums[read] == nums[wright]) {
            read++
        } else {
            wright++
            nums[wright] = nums[read]
            read++
        }
    }

    return wright+1
}
// @lc code=end

