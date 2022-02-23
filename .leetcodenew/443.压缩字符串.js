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
var compress = function(chars) {
    var wright = 0,read = 0,i = 0

    while(read <= chars.length) {

        if (chars[read] != chars[i]) {
            chars[wright++] = chars[i]
            var count = read-i
            if (count > 1) {
                for (var i = 0 ; i < count.toString().length ; i++) {
                    chars[wright++] = count.toString()[i]
                }
            }

            i = read
        }


        read++
    }

    return wright
}
var compress = function(chars) {
    var read = 0,wright = 0 ,i = 0

    while(read <= chars.length) {
        if (chars[read] != chars[i]) {
            chars[wright++] = chars[i]
            var count = read - i
            if (count > 1) {
                for (var j = 0 ; j < count.toString().length ; j++) {
                    chars[wright++] = count.toString()[j]
                }
            }
            
            i = read
        }

        read++
    }

    return wright
}
// @lc code=end

