/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let anchor = 0, write = 0
    for (let r = 0; r <= chars.length; r++) {
      if (r === chars.length || chars[r] != chars[anchor]) {
        chars[write++] = chars[anchor]
        const count = r - anchor
        if (count > 1) {
          const str = String(count)
          for (let j = 0; j < str.length; j++) {
            chars[write++] = str[j]
          }
        }
        anchor = r
      }
    }
    return write
};
// @lc code=end

