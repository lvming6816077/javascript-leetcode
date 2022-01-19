/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res = []
    var back = function(temp,start) {
        res.push(temp.slice())
        if (temp.length > nums.length) {
            return
        }
        for (var i = start ; i < nums.length ; i++) {
            temp.push(nums[i])
            back(temp,i+1)
            temp.pop()
        }
    }

    back([],0)

    return res
};

var subsets = function(nums) {
    var res = []
    var back = function(temp,start) {
        res.push(temp.slice())
        if (start >= nums.length) return
        
        for (var i = start ; i < nums.length ;i++) {
            temp.push(nums[i])
            back(temp,i+1)
            temp.pop()
        }
    }

    back([],0)

    return res
}
// @lc code=end

