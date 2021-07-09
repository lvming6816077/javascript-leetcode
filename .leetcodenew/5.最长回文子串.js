/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length == 1) return s
    var check = function(str){
        var mid = parseInt(str.length/2)

        for (var i = 0 ; i < mid ; i++) {
            if (str[i] != str[str.length-i-1]) {
                return false
            }
        }

        return true

    }
    var res = ''
    for (var i = 0 ; i < s.length ; i++) {
        var cur = s[i]
        for (var j = i+1 ; j < s.length ; j++) {
            cur = cur + '' + s[j]
            // console.log(cur)
            if (check(cur)) {
                // console.log(cur)
                if (cur.length > res.length) {
                    res = cur
                }
            }
        }
    }

    return res == '' ? s[0] : res
};
var longestPalindrome1 = function(s) {
    let n = s.length;
    let res = '';
    let dp = Array.from(new Array(n),() => new Array(n).fill(0));
    //考虑到 主要的递推关系 是由已知子串 i+1..j-1 的情况， 递推到 i..j 的情况， 因此，迭代过程需要反序迭代变量 i ，正序迭代 j
    for(let i = n-1;i >= 0;i--){
        for(let j = i;j < n;j++){//j - i < 2单个字符肯定是回文串 
            //dp[i+1][j-1] 且 s[i] == s[j] 则dp[i][j]肯定是回文串
            if (s[i] == s[j] && (j - i < 2 || dp[i+1][j-1])) {
                dp[i][j] = true
            }
            // 如果dp[i][j]是回文 就记录最大的值
            if(dp[i][j] && j - i +1 > res.length){
                res = s.substring(i,j+1);
            }
        }
    }
    return res;
};


var longestPalindrome1 = function(s) {
    var n = s.length
    var res = ''
    var dp = new Array(n).fill('').map(()=>new Array(n).fill(false))
    for (var i = n-1 ; i>=0 ; i--) {
        for (var j = i ; j < n ; j++) {
            if (s[i] == s[j] && (j-i<2||dp[i+1][j-1])) {
                dp[i][j] = true
            }
            if (dp[i][j] && j+1-i>res.length) {
                res = s.substring(i,j+1)
            }
        }
    }

    return res
}

var longestPalindrome = function(s) {
    var n = s.length
    var res = ''
    var dp = new Array(n).fill('').map(()=>new Array(n).fill(false))
    for (var i = n-1 ; i >= 0 ; i--) {
        for (var j = i ; j < n ; j++) {
            if (s[i] == s[j] && (j - i < 2 || dp[i+1][j-1])) {
                dp[i][j] = true
            }

            if (dp[i][j] && j - i +1 > res.length) {
                res = s.substring(i,j+1)
            }
        }
    }

    return res
}
var longestPalindrome = function(s) {
    var n = s.length
    for (var i = n-1 ; i>=0 ; i--) {
        for (var j = i ; j < n ; j++) {
            if (s[i] == s[j] && (j-i<2||dp[i+1][j-1])) {
                dp[i][j] = true
            }
            if (dp[i][j] && j-i + 1 > res.length) {
                res = s.substring(i,j+1)
            }
        }
    }
}
// @lc code=end

