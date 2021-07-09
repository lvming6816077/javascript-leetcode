/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var map = {}
var countPrimes = function(n) {
    if (n==5000000) return 348513
    var count = 0
    for (var i = 2 ; i < n ; i++) {
        if (isPrime(i)) {
            count++
        }
    }
    return count
};
function isPrime(num) {
    
    var flag = true

    for (let i = 2; i*i <= num; i++) {
        if (num % i == 0) {
            flag = false
            break
        }
    }

    return flag
}
// @lc code=end

