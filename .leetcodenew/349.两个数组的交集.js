/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var res = []
    for (var i = 0 ; i < nums1.length ; i++) { 
        if (binarySearch(nums1[i],nums2.sort((a,b)=>a-b)) && !(res.indexOf(nums1[i]) > -1)) {
            res.push(nums1[i])
        }
    }
    return res
};

var binarySearch = function(target,arr){
    var left = 0,right = arr.length-1
    while(left <= right) {
        var mid = parseInt(left +(right-left)/2)
        var midv = arr[mid]
        if (target == midv) {
            return true
        } else if (target < midv) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
}
// @lc code=end

