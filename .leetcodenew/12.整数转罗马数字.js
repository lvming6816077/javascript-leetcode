/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var map = {
        "1000":"M",
        "900":"CM",
        "500":"D",
        "400":"CD",
        "100":"C",
        "90":"XC",
        "50":"L",
        "40":"XL",
        "10":"X",
        "9":"IX",
        "5":"V",
        "4":"IV",
        "1":"I"
    }

    var arr = Object.keys(map).sort((a,b)=>b-a)
    // console.log(arr)
    var str = ''
    while (num > 0) {
        for (var i = 0 ; i < arr.length ; i++) {
            if (num >= arr[i]) {
                str = str + map[arr[i]]
                break
            }
        }
        num = num - arr[i]
    }

    
    return str
};
// @lc code=end

