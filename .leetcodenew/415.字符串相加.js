/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var maxLength = Math.max(num1.length,num2.length)

    num1 = num1.padStart(maxLength,0)
    num2 = num2.padStart(maxLength,0)
    // console.log(str1)
    var temp = 0
    var jin = 0
    var sum = ''

    for (var i = num1.length - 1 ; i >=0 ; i--) {
        temp = parseInt(num1[i])+parseInt(num2[i])+jin
        jin = parseInt(temp/10)

        sum = temp % 10 + sum 
    }

    if (jin == 1) {
        sum = '1' + sum
    }

    return sum
};
// @lc code=end

