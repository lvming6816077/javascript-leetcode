/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    var left = 0,right = 0
    var need = 0
    var res = 0
    while (right < A.length) {
        var r = A[right]
        right++
        if(r == 0) {
            need++
        }

        while(need > K) {
            var l = A[left]
            left++

            if (l == 0) {// 要求仅包含1，所以左指针遇到0就抛弃，变换个数还能在回复回来1个
                need--
            }

            
        }
        res = Math.max(res,right-left)
    }

    return res
};
// @lc code=end

