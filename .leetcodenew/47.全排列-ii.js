/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var res = []
    var vis = new Array(nums.length).fill(false)
    var map = {}
    var back = function(temp){
        if (temp.length == nums.length) {
            if (!map[temp.join('')]) {
                res.push(temp.slice())
                map[temp.join('')] = true
            }
            
            return
        }
        if (temp.length > nums.length) return
        for (var i = 0 ; i < nums.length ; i++) {
            if (vis[i]) continue
            temp.push(nums[i])
            
            vis[i] = true
            back(temp)
            vis[i] = false
            temp.pop()
            
        }
    }

    back([])

    return res
};
// @lc code=end

