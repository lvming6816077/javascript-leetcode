/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // if (nums.length == 1)
    var pre = [0]
    var sum = 0
    for (var i = 0 ; i < nums.length ; i++) {
        sum = sum + nums[i]
        pre.push(sum)
    }

    

    // console.log(pre)
    var map = new Map()
    // map.set(0,1)
    var count = 0
    for (var i = 0 ; i < pre.length ; i++) {
        if (map.has(pre[i] - k)) {
            count = count + map.get(pre[i] - k)
            // map.set(pre[i] - k,count)
        }
        map.set(pre[i],(map.get(pre[i])||0)+1)

        
        
    }

    // for (var i = 0 ; i < pre.length ; i++) {
    //     for (var j = i+1 ; j < pre.length ; j++) {
    //         if (pre[j] - pre[i] == k) {
    //             count++
    //         }
    //     }
    // }

    return count

};
var subarraySum = function(nums, k) {
    var pre = [0]
    var sum = 0
    for (var i = 0 ; i < nums.length ; i++) {
        sum = sum + nums[i]
        pre.push(sum)
    }

    var count = 0
    var map = {}

    for (var i = 0 ; i < pre.length ; i++) {
        if (map[pre[i]-k]) {
            count = count + map[pre[i]-k]
        }
        map[pre[i]] = (map[pre[i]]||0) + 1
        
    }


    return count
}
// @lc code=end

