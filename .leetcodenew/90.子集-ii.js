/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b)
    var res = []
    var map = {}
    var back = function(temp,start) {
        if (temp.length > nums.length) {
            return
        }
        if (!map[temp.join('')]) {
            res.push(temp.slice())
            map[temp.join('')] = true
        } else {
            map[temp.join('')] = true
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
// @lc code=end

