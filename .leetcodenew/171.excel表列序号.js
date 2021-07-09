/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    // columnTitle = 'AB'
    var res = 0
    for (var i = 0 ; i < columnTitle.length ; i++) {
        res = res*26 + (columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1);
        // console.log(res)
    }
    return res
};
var titleToNumber = function(columnTitle) {
    var res = 0

    for (var i = 0 ; i < columnTitle.length ; i++) {
        res = res*26+columnTitle[i].charCodeAt(0)-'A'.charCodeAt(0)+1
    }

    return res
}


// @lc code=end

