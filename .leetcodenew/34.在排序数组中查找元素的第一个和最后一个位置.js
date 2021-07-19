/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // return [nums.indexOf(target),nums.lastIndexOf(target)]

    var left = 0,right = nums.length-1
    var index = -1
    var res = [-1,-1]
    while(left <= right) {
        var mid = parseInt(left + (right - left) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if(nums[mid] < target){
            left = mid + 1
        } else {
            index = mid
            break
        }
    }
    var start = index

    while (nums[start] == target) {
        res[0] = start
        start--
    }
    var end = index
    while (nums[end] == target) {
        res[1] = end
        end++
    }
    return res

};
var searchRange1 = function(nums, target) {

    var j = -1
    var k = -1
    for (var i = 0 ; i <= nums.length ; i++) {
        if (j != -1 && nums[i] != target && k==-1) {
            k = i-1
        }
        if (nums[i] == target && j ==-1) {
 
            j = i
        }
    }

    return [j,k]
};

// @lc code=end

