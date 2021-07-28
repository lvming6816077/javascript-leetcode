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
var compress = function(chars) {
    var slow = 0,fast = 0

    var count = 1
    var temp = chars[slow]
    while (fast < chars.length) {
      fast++
      if (chars[fast] != temp) {
        var str = count.toString()
        chars[slow]=temp
        if (count > 1) {
          for (var i = 0 ; i < str.length ; i++) {
            chars[slow+i+1] = str[i]
            
          }
          slow = slow +str.length
        }
        slow = slow + 1
        count = 1
        temp = chars[fast]
      } else {
        count++
      }
    }

    return slow
}
var compress = function(chars) {
  var slow = 0,fast = 0,wright = 0

  while (fast <= chars.length) {
    if (chars[fast] != chars[slow]) {
      chars[wright] = chars[slow]
      wright++
      var count = fast - slow
      var str = count.toString()
      if (count > 1) {
        for (var i = 0 ; i < str.length ; i++) {
          chars[wright++] = str[i]
          
        }
        
      }
      slow = fast
    }
    fast++
  }

  return wright
}
// @lc code=end

