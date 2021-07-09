/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var flag = false;
    var map = {}
    var _isHappy = function(_n){

        _n = _n.toString()
        var sum = 0
        for (var i = 0 ; i < _n.length ; i++) {
            sum = sum + Number(_n[i])*Number(_n[i])
        }
        // console.log(sum)
        if (sum == 1) {
            flag = true
            return
        } else {
            
            if (map[sum]) {
                flag = false
                return
            }
            map[sum] = true
            _isHappy(sum)
        }
    }

    _isHappy(n)

    return flag
};
// @lc code=end

