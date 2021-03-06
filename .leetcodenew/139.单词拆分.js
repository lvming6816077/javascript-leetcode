/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var flag = false
    var back = function(temp){
        if (temp.join('') == s) {
            flag = true
            return
        }
        if (temp.join('').length > s.length) {
            return
        }
        for (var i = 0 ; i < wordDict.length ; i++) {
            temp.push(wordDict[i])
            back(temp)
            temp.pop()
        }
    }

    back([])

    return flag
};
var wordBreak1 = function(s, wordDict) {
    var dp = new Array(s.length+1).fill(false)
    dp[0] = true
    for (var i = 1 ; i <= s.length ; i++) {
        for (var j = 0 ; j < wordDict.length ; j++) {
            var s1 = wordDict[j]
            var w = s1.length
            if (i >= w && s.substr(i-w,w) == s1) {
                dp[i] = dp[i] || dp[i-w]
            }
        }
    }


    return dp[s.length]
};
var wordBreak = function(s, wordDict) {
    var dp = new Array(s.length+1).fill(false)
    dp[0] = true
    for (var i = 1; i <= s.length; i++) {
        for (var j = 0 ; j < wordDict.length;j++) {
            var s1 = wordDict[j]
            var temp = s.substr(i-s1.length,s1.length)

            if (temp == s1 && i>=s1.length) {
                dp[i] = dp[i] || dp[i-s1.length]
            }
        }
    }
    return dp[s.length]
}
var wordBreak = function(s, wordDict) {
    var dp = new Array(s.length+1).fill(false)
    // dp[i] 表示以 i 结尾的字符串是否可以被 wordDict 中组合而成
    dp[0] = true // 空字符可以不从wordDict中选择，也能组成

    for (var i = 1 ; i <= s.length ; i++) {
        for (var j = 0 ; j < wordDict.length ; j++) {
            var s1 = wordDict[j] // s1表示当前的字符串
            var temp = s.substr(i-s1.length,s1.length)// temp表示字符串s中截取s1长度的临时串
            // 临时串和当前s1相等时，可匹配
            if (temp == s1) {
                dp[i] = dp[i] || dp[i-s1.length]
            }
        }
    }
    return dp[s.length]
}
var wordBreak = function(s, wordDict) {


    var dp = new Array(s.length+1).fill(false)
    dp[0] = true
    for (var i = 1 ; i <=s.length ; i++) {
        for (var j = 0 ; j < wordDict.length ; j++) {
            var s1 = wordDict[j]
            var str = s.substr(i-s1.length,s1.length)
            if (str == s1) {
                dp[i] = dp[i] || dp[i-s1.length]
            }
            
        }
    }

    return dp[s.length]
}
// @lc code=end

