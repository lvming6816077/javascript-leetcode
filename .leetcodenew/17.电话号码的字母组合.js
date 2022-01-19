/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

 // 回溯
var letterCombinations = function(digits) {
    if (digits == '') return []
    var phoneMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    var res = []

    var back = function(temp,key){
        if (temp.length == digits.length) {
            res.push(temp.join(''))
        }
        if (temp.length > digits.length) {
            return
        }
        var array = phoneMap[digits[key]]||[]
        for (var i = 0 ; i < array.length ; i++) {
            temp.push(array[i])
            back(temp,key+1)
            temp.pop()
        }
    }

    back([],0)

    return res
};
var letterCombinations = function(digits) {
    if (digits == '') return []
    var phoneMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    var res = []

    var back = function(temp,key) {

        if (key == digits.length) {
            res.push(temp.join(''))
            return
        }
        if (key > digits.length) {
            return
        }
        var array = phoneMap[digits[key]]||[]
        for (var i = 0 ; i < array.length ; i++) {
            temp.push(array[i])
            back(temp,key+1)
            temp.pop()
        }
    }

    back([],0)

    return res
}
var letterCombinations = function(digits) {
    if (digits == '') return []
    var phoneMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    var res = []

    var back = function(temp,index){
        if (index == digits.length) {
            res.push(temp.join(''))
            return
        }
        if (index > digits.length) return

        var array = phoneMap[digits[index]] || []
        for (var i = 0 ; i < array.length ; i++) {
            temp.push(array[i])
            back(temp,index+1)
            temp.pop()
        }
    }


    back([],0)

    return res

}
// @lc code=end

