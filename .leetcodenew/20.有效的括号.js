/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = []
    if (s.length % 2 != 0) return false
    for (var i = 0 ; i < s.length ; i++) {
        if (s[i] == '(') {
            stack.push('(')
        }else if(s[i] == '[') {
            stack.push('[')
        }else if(s[i] == '{') {
            stack.push('{')
        }else if(s[i] == ')') {
            if (stack.pop()!='(') {
                return false
            }

        }else if(s[i] == ']') {
            if (stack.pop()!='[') {
                return false
            }
        }else if(s[i] == '}') {
            if (stack.pop()!='{') {
                return false
            }
        }
    }

    return stack.length == 0 ? true : false
};

var isValid = function(s) {
    var stack = []
    if (s.length&1 == 1) return false

    for (var i = 0 ; i < s.length ; i++) {
        if (s[i] == '(') {
            stack.push('(')
        } else if (s[i] == '[') {
            stack.push('[')
        } else if (s[i] == '{') {
            stack.push('{')
        } else if (s[i] == ')') {
            
            var flag = stack.pop() == '('
            if (!flag) return flag
        } else if (s[i] == ']') {
            
            var flag = stack.pop() == '['
            if (!flag) return flag
        } else if (s[i] == '}') {
            
            var flag = stack.pop() == '{'
            if (!flag) return flag
        }
    }

    return stack.length == 0 ? true : false
}
var isValid = function(s) {
    var arr = []
    for (var i = 0 ; i < s.length ; i++) {
        if (s[i] == '(') {
            arr.push('(')
        }else if (s[i] == '[') {
            arr.push('[')
        }else if (s[i] == '{') {
            arr.push('{')
        } else if (s[i] == ')') {
            var flag = arr.pop() == '('

            if (!flag) return false
        } else if (s[i] == ']') {
            var flag = arr.pop() == '['

            if (!flag) return false
        } else if (s[i] == '}') {
            var flag = arr.pop() == '{'

            if (!flag) return false
        }
    }

    return arr.length == 0
}
// @lc code=end

