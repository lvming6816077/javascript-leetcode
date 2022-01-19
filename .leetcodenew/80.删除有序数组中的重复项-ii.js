/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var j = 1
    for (var i = 2 ; i < nums.length ; i++) {
        if (nums[i] == nums[j] && nums[i] == nums[j-1]) {

        } else {
            j++
            nums[j] = nums[i]
        }
    }

    return j+1
};
var removeDuplicates1 = function(nums) {
    var wright = 0,read = 1
    var count = 0
    while(read < nums.length) {
        if (nums[read] == nums[wright]) {
            count++
            
            wright++
        }
        read++
        if (count >=2) {
            wright--
            count = 0
        }
    }
    return wright
}
var removeDuplicates1 = function(nums) {
    var wright = 0,read = 0,count = 0,j = 0

    while(read < nums.length) {
        while (read < nums.length && nums[read] == nums[j]) {
            
            if (count++ < 2) {
                nums[wright++] = nums[read]
            }
            read++
        }
        count = 0
        j = read
    }

    return wright
}
var removeDuplicates = function(nums) {
    var j = 0,read = 0,wright = 0,count = 0
    while(read < nums.length) {
        while(nums[j] == nums[read] && read < nums.length) {

            if (count++ < 2) {
                nums[wright++] = nums[read]
            }
            read++
        }
        j = read
        count = 0

    }

    return wright
}
var removeDuplicates = function(nums) {
    var read = 0,wright = 0,i = 0,count = 0

    while(read < nums.length) {
        while(nums[read] == nums[i]) {
            
            
            if (count < 2) {
                nums[wright++] = nums[read]
            }
            count++
            read++
        }
        count = 0

        i = read
    }

    return wright
}
// @lc code=end

