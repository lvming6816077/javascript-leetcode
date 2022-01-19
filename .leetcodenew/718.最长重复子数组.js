/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    var dp = new Array(nums1.length+1).fill('').map(d=>new Array(nums2.length+1).fill(0))
    dp[0][0] = 0
    var res = 0
    for (var i = 1; i <= nums1.length ; i++) {
        for (var j = 1 ; j <= nums2.length ; j++) {
            if (nums2[j-1] == nums1[i-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            }
            res = Math.max(dp[i][j],res)
        }
    }

    return res
};
var findLength = function(nums1, nums2) {
    var map1 = {},map2 = {}
    for (var c of nums1) {
        if (map1[c]) {
            map1[c]++
        } else {
            map1[c] = 1
        }
        
    }
    for (var c of nums2) {
        if (map2[c]) {
            map2[c]++
        } else {
            map2[c] = 1
        }
    }

    if (Object.keys(map1).length > Object.keys(map2).length) {
        var temp = map2
        map2 = map1
        map1 = temp
    }

    var count = 0

    for (var key in map1) {
        if (map2[key]) {
            count = count + Math.min(map1[key],map2[key])
        }
    }

    return count
}
// @lc code=end

