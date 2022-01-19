/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    var res = [intervals[0]]
    for (var i = 0 ; i < intervals.length ; i++) {
        if (intervals[i][0] >= res[res.length-1][0] && intervals[i][1] <= res[res.length-1][1]) {
            continue
        }else if(intervals[i][0] <= res[res.length-1][1] && intervals[i][1] >= res[res.length-1][1]) {
            res[res.length-1] = [res[res.length-1][0],intervals[i][1]]
        } else {
            res.push(intervals[i])
        }
    }

    return res
};


var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    var res = [intervals[0]]
    
    for (var i = 1 ; i < intervals.length ; i++) {
        if (res[res.length-1][1] >= intervals[i][0] && res[res.length-1][1] <= intervals[i][1]) {
            res[res.length-1][1] = intervals[i][1]
            // res[res.length-1] = [res[res.length-1][0],intervals[i][1]]
        } else if (res[res.length-1][0] <= intervals[i][0] && res[res.length-1][1] >= intervals[i][1]) {
            continue
        } else {
            res.push(intervals[i])
        }
    }

    return res
}
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    var res = [intervals[0]]

    for (var i = 1 ; i < intervals.length ; i++) {
        if (res[res.length-1][1] < intervals[i][0]) {
            res.push(intervals[i])
        } else {
            res[res.length-1][1] = Math.max(intervals[i][1],res[res.length-1][1])
        }
    }

    return res
}
var merge = function(intervals) {
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

