/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    if (nums.length == 1) return nums
    var j = 0
    var arr = []
    for (var i = 0 ; i < nums.length ; i++) {

        if((nums[i]%2) == 0) {
            var temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            j++
        }

    }


    return nums
};
var swap = function(temm1,temp2){

}
// @lc code=end

