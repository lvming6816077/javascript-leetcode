/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray1 = function(nums) {
    for (var i = 0 ; i < nums.length ; i++) {
        for (var j = 0 ; j < nums.length - i -1;j++) {
            if (nums[j] > nums[j+1]) {
                var temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }

    return nums
};
var sortArray1 = function(nums) {
    if (nums.length <= 1) return nums
    var mid = Math.floor(nums.length/2)
    var midArr = nums.splice(mid,1)[0]
    var left = []
    var right = []
    for (var i = 0 ; i < nums.length ; i++) {
        if (nums[i] > midArr) {
            right.push(nums[i])
        } else {
            left.push(nums[i])
        }
    }

    return sortArray(left).concat([midArr]).concat(sortArray(right))
};
var sortArray1 = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    var mid =  Math.floor(nums.length/2)
    var left = sortArray(nums.slice(0,mid))
    var right = sortArray(nums.slice(mid))
    console.log(left)
    
    return merge(left,right)
}
var merge = function(arr1,arr2) {
    console.log('x')
    var res = []

    var i = 0
    var j = 0

    while (i<arr1.length && j<arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }

    if (i == arr1.length) {
        res = res.concat(arr2.slice(j))
    }
    if (j == arr2.length) {
        res = res.concat(arr1.slice(i))
    }

    return res
}
var sortArray = function(nums) {
    for (var i = 0 ; i < nums.length ; i++) {
        for (var j = i ; j > 0 ; j--) {
            if (nums[j] < nums[j-1]) {
                [nums[j],nums[j-1]] = [nums[j-1],nums[j]]
            } else {
                break
            }
        }
    }

    return nums
}
// @lc code=end

