/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (var i  = 0 ; i< nums.length ; i++) {
        for (var j = 0 ; j < nums.length - i -1 ; j++) {
            if (nums[j] > nums[j+1]) {
                var temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }

    return nums
};
var sortColors = function(nums) {
    var a = sort(nums)

    for (var i = 0 ; i < a.length ; i++){
        nums[i] = a[i]
    }
}
var sort = function(array){
    if (array.length < 2) {
        return array
    }
    var mid = Math.floor(array.length/2)

    var leftarray = sort(array.slice(0,mid))
    var rightarray = sort(array.slice(mid))
    return merge(leftarray,rightarray)
}
var merge = function(leftarray,rightarray){
    var i = 0,j = 0
    var arr = []
    while (i < leftarray.length&& j < rightarray.length) {
        if (leftarray[i] < rightarray[j]) {
            arr.push(leftarray[i])
            i++
        } else {
            arr.push(rightarray[j])
            j++
        }
    }
    if (i >= leftarray.length) {
        arr = arr.concat(rightarray.slice(j))
    }
    if (j >= leftarray.length) {
        arr = arr.concat(leftarray.slice(i))
    }

    return arr
}
// @lc code=end

