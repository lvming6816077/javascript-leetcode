/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var arr = []
    for (var i = 1 ; i <= n ; i++) {
        arr.push(i)
    }
    var res = []
    var back = function(temp,start){
        if (temp.length == k) {
            res.push(temp.slice())
            return 
        }
        if (temp.length > k) {
            return 
        }
        for (var i = start ; i < arr.length ; i++) {
            temp.push(arr[i])
            back(temp,i+1)
            temp.pop()
        }
    }

    back([],0)

    return res
};
// @lc code=end

