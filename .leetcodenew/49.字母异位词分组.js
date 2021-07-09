/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var res = []
    for (var i = 0 ; i < strs.length ; i++) {
        var map = {
            sortStr: strs[i].split('').sort().join(''),
            str: strs[i]
        }

        res.push(map)
    }

    var resMap = {}

    for (var i = 0 ; i < res.length ; i++) {
        if (resMap[res[i].sortStr]) {
            resMap[res[i].sortStr].push(res[i].str)
        } else {
            resMap[res[i].sortStr] = [res[i].str]
        }
        
    }
    var res = []

    for (var key in resMap) {
        res.push(resMap[key])
    }


    
    return res
};
// @lc code=end

