/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function(intervals,newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b)=>a[0]-b[0])
    var res = [intervals[0]]
    for (var i = 0 ; i < intervals.length ; i++) {
        if (intervals[i][0] >= res[res.length-1][0] && intervals[i][1] <= res[res.length-1][1]) {// 包含
            continue
        }else if(intervals[i][0] <= res[res.length-1][1] && intervals[i][1] >= res[res.length-1][1]) {// 相交
            res[res.length-1] = [res[res.length-1][0],intervals[i][1]]
        } else { // 不相交
            res.push(intervals[i])
        }
    }

    return res
};
var insert = function(intervals,newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b)=>a[0]-b[0])
    var res = [intervals[0]]
    for (var i = 1 ; i < intervals.length ; i++) {
        


        if (intervals[i][0] > res[res.length-1][1]) {
            // 不相交
            res.push(intervals[i])
        } else {
            res[res.length-1][1] = Math.max(res[res.length-1][1],intervals[i][1])
        }
    }

    return res
};
var insert = function(intervals,newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b)=>a[0]-b[0])

    var res = [intervals[0]]

    for (var i = 1 ; i < intervals.length ; i++) {
        if (res[res.length-1][1] < intervals[i][0]) {
            res.push(intervals[i])
        } else {
            res[res.length-1][1] = Math.max(res[res.length-1][1],intervals[i][1])
        }
    }

    return res
}
// @lc code=end

