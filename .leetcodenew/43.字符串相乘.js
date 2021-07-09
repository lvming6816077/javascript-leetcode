/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 var multiply = function(num1, num2) {


    return (BigInt(num1)*BigInt(num2)).toString()
};
var multiply = function(num1, num2) {
    if (num1 == 0 || num2 == 0) return '0'
    var res = ''
    for (var i = num1.length-1 ; i >= 0 ; i--) {
        var jin = 0
        var temp = 0
        var sum = ''
        for (var j = num2.length-1 ; j >= 0 ; j--) {
            temp = num1[i]*num2[j] + jin
            jin = Math.floor(temp / 10)
            sum = temp%10 + ''+sum
        }
        if (jin != 0) {
            sum = jin+''+sum
        }
        var k = num1.length-1-i
        while(k--){
            sum = sum + '0'
        }
        res = addStrings(sum,res)
    }

    return res
};
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

    if (jin != 0) {
        sum = jin + ''+sum
    }

    return sum
};
// @lc code=end

