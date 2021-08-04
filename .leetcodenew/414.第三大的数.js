/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = Array.from(new Set(nums))
    var res = nums.sort((a,b)=>b-a)[2]
    return res == undefined ? nums[0] : res
};
// @lc code=end

