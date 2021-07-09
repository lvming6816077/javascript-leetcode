/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var aindex = 'a'.charCodeAt()
    var set = new Set()
    var dic = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    for (var word of words) {
        var str = ''
        for (var i = 0 ; i < word.length ; i ++) {
            str += dic[word[i].charCodeAt()-aindex]
        }
        set.add(str)
    }

    return set.size
};
// @lc code=end

