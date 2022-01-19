/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    var arr = []
    for (var i = 0 ; i < nums.length ; i++) {
        var left = i+1,right = nums.length-1
        while(left < right) {
            if (nums[i] + nums[left] + nums[right] == 0) {
                var val = [nums[i] , nums[left] , nums[right]].join(',')
                if (arr.indexOf(val) > -1) {

                } else {
                    arr.push(val)
                }
                
                left++
                right--
            } else if (nums[i] + nums[left] + nums[right] < 0) {
                left++
            } else {
                right--
            }
        }
    }

    return arr.map(item=>item.split(','))

};

var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    var res = []
    for (var i = 0; i < nums.length ; i++) {
        var left = i+1,right = nums.length-1

        while(left<right) {
            if (nums[i] + nums[left] + nums[right] < 0) {
                left++
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            } else {
                var cur = [nums[i],nums[left],nums[right]].join(',')
                if (res.indexOf(cur) == -1) {
                    res.push(cur)
                }
                left++
                right--
            }
        }
    }

    return res.map(d=>d.split(','))
};
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    var res = []

    for (var i = 0 ; i < nums.length ; i++) {
        var left = i+1,right = nums.length-1
        while(left < right) {
            if (nums[i] + nums[left] + nums[right] < 0) {
                left++
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            } else {
                var cur = [nums[i],nums[left],nums[right]].join(',')
                if (res.indexOf(cur) == -1) {
                    res.push(cur)
                }
                left++
                right--
            }
        }
    }

    return res.map(i=>i.split(','))
}
// @lc code=end

