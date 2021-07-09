/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var total = 0
    var current = 0
    var start = 0

    for (var i = 0 ; i < gas.length ; i++) {
        total = total + (gas[i]-cost[i])
        current = current + (gas[i]-cost[i])
        if (current < 0) {
            start = i+1
            current = 0
        }
    }
    if (total < 0) return -1;
    return start
};
// @lc code=end

