/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res = []
    var vis = new Array(nums.length).fill(false)
    var back = function(temp){
        if (temp.length == nums.length) {
            res.push(temp.slice())
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
var permute = function(nums) {
    var res = []
    var visited = new Array(nums.length).fill(false)

    var back = function(temp){
        if (temp.length == nums.length) {
            res.push(temp.slice())
            return
        }
        if (temp.length > nums.length) return
        for (var i = 0 ; i < nums.length ; i++) {
            if (visited[i]) continue
            
            temp.push(nums[i])
            visited[i] = true
            back(temp)
            visited[i] = false
            temp.pop()
        }
    }

    back([])
    return res
}
// @lc code=end

