/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var arr1 = version1.split('.')
    var arr2 = version2.split('.')

    var arr = arr1.length < arr2.length ? arr2 : arr1
    for (var i = 0 ; i < arr.length ; i++) {
        var data1 = parseInt(arr1[i] || 0)
        var data2 = parseInt(arr2[i] || 0)
        if (data1 < data2) {
            return -1
        } else if (data1 > data2) {
            return 1
        }
    }

    return 0
};
// @lc code=end

