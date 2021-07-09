/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var res = []
    var map = {}
    for (var i = 0 ; i < nums.length ; i++) {
        var cur = nums[i]
        if (!map[cur]) {
            map[cur] = 1
        } else {
            map[cur] ++
        }

        if (map[cur] == 2) {
            res.push(cur)
        }
    }

    return res
};
var findDuplicates = function(nums) {
    var res = []

    for (var i = 0 ; i < nums.length ; i++) {
        var abs = Math.abs(nums[i])
        if (nums[abs-1] < 0) {
            res.push(abs)
        } else {
            nums[abs-1] *= -1
        }
    }

    return res
};
var findDuplicates = function(nums) {
    var res = []

    for (var i = 0 ; i < nums.length ; i++) {

        var cur = nums[i].toString().replace('xx','')
        if (nums[cur-1].toString().indexOf('xx') > -1) {
            res.push(cur)
        } else {
            nums[cur-1] = nums[cur-1] + 'xx'
        }
        
    }

    return res
};
// @lc code=end

