/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var count = 0
    for (var i = 0 ; i < flowerbed.length ; i++) {
        if (count >= n) return true
        if (flowerbed[i] == 1) {
            continue
        }
        if (flowerbed[i-1] == 1) {
            continue
        }
        if (flowerbed[i+1] == 1) {
            continue
        }
        flowerbed[i] = 1
        count++
    }

    return count >= n
};
// @lc code=end

