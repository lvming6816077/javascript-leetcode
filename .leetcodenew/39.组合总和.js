/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//回溯
var combinationSum = function(candidates, target) {

    var res = []
    var back = function(temp,start,_target) {


        if (_target == 0) {
            res.push(temp.concat([]))
            return
        }
        if (_target < 0) {
            return
        }
        for (var i = start ; i < candidates.length ; i++) {
            temp.push(candidates[i])
            back(temp,i,_target-candidates[i])
            temp.pop()
        }
    }

    back([],0,target)

    return res
};
// @lc code=end

