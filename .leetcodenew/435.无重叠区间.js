/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])

    var count = 0
    var last = intervals[0][1]
    for (var i = 1 ; i < intervals.length ; i++) {
        if (last > intervals[i][0]) {
            last = Math.min(intervals[i][1],last)
            count++
        } else {
            last = intervals[i][1]
        }
    }

    return count
};
// @lc code=end

