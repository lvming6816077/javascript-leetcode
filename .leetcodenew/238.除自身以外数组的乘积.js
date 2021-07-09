/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf1 = function(nums) {
    var res = []
    for (var i = 0 ; i < nums.length ; i++) {
        var plu = 1;
        for (var j = 0 ; j < nums.length ; j++) {
            if (i != j) {
                plu = plu * nums[j]
            }
            // console.log(nums[i],nums[j])
        }
        res.push(plu)
    }

    return res
};
var productExceptSelf = function(nums) {
    var sum = 1
    var arr1 = []
    var arr2 = []
    var res = []
    for (var i = 0 ; i < nums.length ; i++) {
        sum = sum * (nums[i-1] == undefined ? 1 : nums[i-1])
        arr1.push(sum)
    }
    sum = 1
    for (var i = nums.length-1 ; i >= 0 ; i--) {
        sum = sum  * (nums[i+1] == undefined ? 1 : nums[i+1])
        arr2.push(sum)
    }

    arr2.reverse()
    for (var i = 0 ; i < nums.length ; i++) {
        
        res.push(arr1[i]*arr2[i])
    }


    return res
};
// @lc code=end

