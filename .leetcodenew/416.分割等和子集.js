/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    var sum = nums.reduce((prev,cur)=>{
        return prev + cur
    })

    var target = sum/2

    if (target.toString().indexOf('.') > -1) return false

    var dp = new Array(target+1).fill(false)
    dp[0] = true
    for (var i = 0 ; i <nums.length ; i++) {
        for (var j = target ; j >= 1 ; j--) {
            if (j >= nums[i]) {
                dp[j] = dp[j] || dp[j-nums[i]]
            }
            
        }
    }
    
    return dp[target]
};
// @lc code=end

