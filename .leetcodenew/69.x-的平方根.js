/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for (var i = 1 ; i <=parseInt(x/2)+1 ; i++) {
        if (i*i >x) {
            return i-1
        }
        if (i*i == x) {
            return i
        }
    }

    return null
};
var mySqrt1 = function(x) {
    if (x == 1) return 1
    var left = 0 , right = parseInt(x /2)

    while(left <= right) {
        var mid = parseInt(left + (right-left)/2)

        if (mid *mid == x) {
            return mid
        } else if (mid * mid < x) {
            left = mid +1
        } else {
            right = mid -1
        }
    }

    return right
};
var mySqrt = function(x) {
    // return parseInt(Math.sqrt(x))
    if (x == 1) return 1
    var left = 0,right = parseInt(x/2)

    while(left <= right) {
        var mid = parseInt(left+(right-left)/2)
        if (mid * mid == x) {
            return mid
        } else if(mid * mid < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
}
var mySqrt = function(x) {
    if (x == 1) return 1
    var left = 0,right = parseInt(x/2)

    while(left <= right) {
        var mid = parseInt(left + (right-left)/2)
        if (mid * mid < x) {
            left = mid + 1
        } else if (mid * mid > x) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return right
}
// @lc code=end

