/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    var even = []
    var odd = []
    for (var i = 0;i<nums.length ; i++) {
        if (nums[i] % 2 == 0) {
            even.push(nums[i])
        } else {
            odd.push(nums[i])
        }
    }
    var res = []
    for (var i = 0,j=0 ; i < nums.length ; i = i+2,j++) {
        res[i] = even[j]
    }
    for (var i = 1,j=0 ; i < nums.length ; i = i+2,j++) {
        res[i] = odd[j]
    }

    return res
};
// @lc code=end

