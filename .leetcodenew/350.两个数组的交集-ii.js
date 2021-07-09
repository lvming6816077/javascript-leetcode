/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var map1 = {}
    var map2 = {}
    for (var i = 0 ; i < nums1.length ; i++) {
        if (!map1[nums1[i]]) {
            map1[nums1[i]] = 1
        } else {
            map1[nums1[i]]++
        }
    }
    for (var i = 0 ; i < nums2.length ; i++) {
        if (!map2[nums2[i]]) {
            map2[nums2[i]] = 1
        } else {
            map2[nums2[i]]++
        }
    }
    var res = []
    console.log(map1,map2)
    for (var key in map1) {
        if (map2[key]) {
            var count = Math.min(map2[key],map1[key])
            for (var i = 0 ; i < count ; i++) {
                res.push(key)
            }
        }
    }

    return res
};
// @lc code=end

