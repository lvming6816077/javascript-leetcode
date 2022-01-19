/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) return nums.length
    var j = 1
    for (var i = 2 ; i < nums.length ; i++) {
        if (nums[i] == nums[j] && nums[i] == nums[j-1]) {

        } else {
            j++
        }

        nums[j] = nums[i]
    }

    return j+1
};
var removeDuplicates = function(nums) {
    var wright = 0,read = 1,count = 0

    while(read < nums.length) {
        if (nums[read] == nums[wright]) {
            
            if (count < 1) {
                nums[++wright] = nums[read]
            }
            count++
            read++
            
            
        } else {
            nums[++wright] = nums[read++]
            count = 0
        }
    }

    return wright+1
}
// @lc code=end

