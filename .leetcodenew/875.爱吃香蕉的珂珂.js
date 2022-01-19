/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    if (h < piles.length) return false
    var checkCanEat = function(mid){
        var count = 0
        for (var i = 0 ; i < piles.length ; i++) {
            count = count + Math.ceil(piles[i] / mid)
        }

        return count
    }

    var maxp = Math.max(...piles)


    var left = 1,right = maxp

    while(left < right) {
        var mid = parseInt(left + (right-left)/2)
        if (checkCanEat(mid) > h) {
            // 速度太慢
            left = mid +1
        } else {
            
            right = mid
        }
    }

    return right


};
// @lc code=end

