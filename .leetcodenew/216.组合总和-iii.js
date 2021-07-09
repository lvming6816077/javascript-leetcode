/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var res = []
    var back = function(temp,start,target){
        if (temp.length == k && target == 0) {
            res.push(temp.slice())
            return
        }
        if (temp.length > k || target < 0) {
            return
        }
        for (var i = start ; i < 10 ; i++) {
            temp.push(i)
            back(temp,i+1,target-i)
            temp.pop()
        }
    }
    back([],1,n)

    return res
};
// @lc code=end

