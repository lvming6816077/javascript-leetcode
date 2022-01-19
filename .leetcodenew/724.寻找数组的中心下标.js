/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sum = nums.reduce((pre,cur)=>pre+cur)

    var pre = 0
    for (var i = 0 ; i < nums.length ; i++) {
        if (pre + nums[i] + pre == sum) {
            return i
        }

        pre = pre + nums[i]
    }

    return -1
};
// @lc code=end

