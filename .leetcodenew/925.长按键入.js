/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (name.length > typed.length) return false
    if (name[name.length-1] != typed[typed.length-1]) return false
    var j = 0,i=0
    while(j < typed.length) {
        if (typed[j] == name[i]) {
            i++
            j++
        } else {
            if (typed[j] == typed[j-1]) {
                j++
            } else {
                return false
            }
            
        }
    }
    return i >= name.length
};
// @lc code=end

