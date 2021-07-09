/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    var res = []
    var back = function(temp,_target){
        if (_target == 0) {
            res.push(temp.slice())
            return
        }
        if (_target < 0) {
            return
        }
        for (var i = 0 ; i < nums.length ; i++) {
            temp.push(nums[i])
            back(temp,_target-nums[i])
            temp.pop()
        }
    }

    back([],target)

    return res.length
};
var combinationSum4 = function(nums, target) {
    var dp = new Array(target+1).fill(0)
    dp[0] = 1
    for (var i = 1 ; i<=target ; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] = dp[i] + dp[i-nums[j]]
            }
            
        }
    }

    return dp[target]
};
var combinationSum4 = function(nums, target) {
    var dp = new Array(target+1).fill(0)
    dp[0] = 1

    for (var i = 1 ; i <=target ; i ++) {
        for (var j = 0 ; j < nums.length ; j++) {
            if (i >= nums[j]) {
                dp[i] = dp[i] + dp[i-nums[j]]
            }
            
        }
    }

    return dp[target]
}
var combinationSum4 = function(nums, target) {
    var dp = new Array(target+1).fill(0)
    dp[0] = 1
    for (var i = 0 ; i<=target ; i++) {
        for (var j = 0 ; j < nums.length ; j++) {
            if (i >=nums[j]) {
                dp[i] = dp[i]+dp[i-nums[j]]
            }
        }
    }
    return dp[target]
}
// @lc code=end

