/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {}
    for (var i = 0 ; i < nums.length ; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }
    }

    for (var key in map) {
        if (map[key] == 1) {
            return key
        }
    }

    return null
};

var singleNumber = function(nums) {
    // nums = [1,1,1,2,3,3,3]
    nums.sort((a,b)=>a-b)
    for (var i = 0 ; i < nums.length ; i = i+3) {

        if (i< nums.length-1 && nums[i] != nums[i+1]) {
            return nums[i]
        }

        if (i == nums.length-1) {
            return nums[i]
        }
    }
    return null
}
// @lc code=end

