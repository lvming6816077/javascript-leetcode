/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // k=1
    var n = nums.length
    k %= n
    for (var j = 0 ; j < k ; j++) {
        var last = nums[n-1]
        for (var i = n -1 ; i >0 ; i--) {

            nums[i] = nums[i-1]
            
        }
        nums[0] = last
    }
};

var rotate = function(nums, k) {
    let a = []; // 
    for(let i = 0; i < nums.length; i++) {
      a[(i+k) % nums.length] = nums[i];
    }
    console.log(a)
    for(let i = 0; i < nums.length; i++) {
      nums[i] = a[i];
    }
  }

// @lc code=end

