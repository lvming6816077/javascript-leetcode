/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    if(columnNumber <= 0) return "";

    let res = '';
    while(columnNumber >0) {
        columnNumber--; // 通过让 n - 1，使得余数 rat 减少 1 
        let rat = columnNumber % 26;
        // res.unshift();
        res = String.fromCharCode(rat + 65)+res
        columnNumber = Math.floor(columnNumber / 26);
    }
    return res;
};
// 171题
var titleToNumber = function(columnTitle) {

    var res = 0
    for (var i = 0 ; i < columnTitle.length ; i++) {
        res = res*26 + (columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1);

    }
    return res
};




// @lc code=end

