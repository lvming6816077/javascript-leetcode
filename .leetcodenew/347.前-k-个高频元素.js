/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = new Map()
    for (var i = 0 ; i < nums.length ; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i],map.get(nums[i]) + 1)
        } else {
            map.set(nums[i],1)
        }
    }

    var arr = []

    for (var [key,v] of map) {

        arr.push([key,v])
    }

    arr.sort((a,b)=>a[1]-b[1])

    return(arr.map(d=>d[0]).reverse().slice(0,k))
};
// @lc code=end

