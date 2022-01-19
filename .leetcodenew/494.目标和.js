/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {

    var sum = nums.reduce((pre,cur)=>pre+cur)
    /* 若和为奇数则不会装满背包，返回0 */
    if ((sum + target) % 2 == 1) {
        return 0;
    }
    if (target > sum) return 0
    
    var _target = (sum +target)/2
    if (_target < 0) return 0
    var dp = new Array(_target + 1).fill(0);
    dp[0] = 1;// 根据实际情况是否设置初始值
    for(var i = 0; i <= nums.length; i++){
        for(var j = _target; j >= 0; j--){
            if (j-nums[i] >=0) {
                dp[j] = dp[j]+dp[j-nums[i]]
            }   
            
        }
    }

    return dp[_target]
};
// @lc code=end

