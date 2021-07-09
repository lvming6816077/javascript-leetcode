/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    var res = []
    var map = {}
    var back = function(temp,start,_target){
        if (_target == 0) {
            if (!map[temp.join('')]) {
                res.push(temp.slice())
                map[temp.join('')] = true
            }
            
            return
        }
        if (_target < 0) {
            return
        }
        for (var i = start ; i < candidates.length ; i++) {
            temp.push(candidates[i])
            back(temp,i+1,_target-candidates[i])
            temp.pop()
        }
    }

    back([],0,target)

    return res
};
// @lc code=end

