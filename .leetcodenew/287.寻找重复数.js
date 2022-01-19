/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var left = 0,right = 0
    var map = new Map()


    for (var i = 0 ; i < nums.length ; i++) {
        if (map.has(nums[i])) {
            return nums[i]
        } else {
            map.set(nums[i],true)
        }
    }

    return null
};

var findDuplicate = function(nums) {
    var left = 0; 
    var right = nums.length - 1; // 注意
    var cnt = 0
    var ant = -1
    while(left <= right) {
        var mid = parseInt(left + (right - left) / 2);
        cnt = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
              cnt = cnt + 1
            }
          }

        if(cnt <= mid) {
            left = mid + 1; // 注意
        }
        else {
            right = mid - 1; // 注意
            ant = mid
        }
    }
    return ant;
}
var findDuplicate = function (nums) {
    let slow = fast = 0 // 初始节点
    while(nums[slow] && nums[fast]){
        slow = nums[slow]
        fast = nums[nums[fast]]
        // console.log(slow,fast)
        if(slow === fast){
            
            let next = 0
            while(next !== slow) {
                slow = nums[slow]
                next = nums[next]
            }
            return slow
        }
    }
}

// @lc code=end

