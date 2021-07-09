/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    var _findKthLargest = function(_nums){
        if (_nums.length <= 1) { return _nums; }
        var left = 0 , right = _nums.length-1
        var mid = parseInt(left+(right-left)/2)
    
        var numMid = _nums.splice(mid,1)[0]
    
        var arr1 = []
        var arr2 = []
    
        for (var i = 0 ; i < _nums.length ; i++) {
            if (_nums[i] > numMid) {
                arr2.push(_nums[i])
            } else {
                arr1.push(_nums[i])
            }
        }

        return _findKthLargest(arr2).concat([numMid]).concat(_findKthLargest(arr1))
    }

    return _findKthLargest(nums)[k-1]

};
// @lc code=end

