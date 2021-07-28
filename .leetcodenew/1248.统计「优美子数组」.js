/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    var left = 0,right = 0,
    count = 0,res = 0

    var leftcount = 0
    var rightcount = 0
    while (right< nums.length) {
        var r = nums[right]
        right++

        if (r%2 == 1) {
            count++
        }

        // 统计个数
        if (count == k) {
            var temp2 = left
            while (nums[temp2] % 2 == 0) {
                leftcount++
                temp2++
            }
            var temp = right
            while (nums[temp] % 2 == 0) {
                rightcount++
                temp++
            }
            res = (leftcount+1)*(rightcount+1)+res
            
        }

        // 缩小窗口
        while (count == k) {
            var l = nums[left]
            if (l % 2 == 1) {
                count--
                rightcount = 0
                leftcount = 0
            }
            left++


            
        }
    }

    return res
};
var numberOfSubarrays = function(nums, k) {
    var pre = [0]
    var sum = 0
    for (var i = 0 ; i < nums.length ; i++) {
        sum = sum + (nums[i]%2 == 1 ? 1 : 0)
        pre.push(sum)
    }

    var count = 0
    var map = new Map()

    for (var i = 0 ; i < pre.length ; i++) {
        if (map.has(pre[i] - k)) {
            count  = count + map.get(pre[i] - k)
        }
        if (map.has(pre[i])) {
            map.set(pre[i],map.get(pre[i])+1)
        } else {
            map.set(pre[i],1)
        }

        
    }


    return count
}
// @lc code=end

