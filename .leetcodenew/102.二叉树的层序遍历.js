/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    var arr = []
    var res = []
    arr.push(root)
    while(arr.length) {
        var len = arr.length
        var floor = []

        while(len > 0) {
            var temp = arr.shift()
            if (!temp) break
            floor.push(temp.val)
            if (temp.left) {
                arr.push(temp.left)
            }
            if (temp.right) {
                arr.push(temp.right)
            }
            len--
        }

        res.push(floor)
    }

    return res
};
var levelOrder = function(root) {
    if (root == null) return []
    var arr = []
    var res = []
    arr.push(root)
    while(arr.length) {
        var len = arr.length
        var floor = []
        while(len) {
            var temp = arr.shift()
            if (!temp) break
            floor.push(temp.val)
            if (temp.left) {
                arr.push(temp.left)
            }
            if (temp.right) {
                arr.push(temp.right)
            }
            len --
        }

        res.push(floor)
    }

    return res
};

var levelOrder = function(root) {
    if (root == null) return []
    var arr = []
    arr.push(root)
    var res = []
    while(arr.length) {
        var floor = []
        var len = arr.length

        while(len > 0) {
            var temp = arr.shift()
            if (!temp) break
            floor.push(temp.val)
            if (temp.left) {
                arr.push(temp.left)
            }
            if(temp.right) {
                arr.push(temp.right)
            }
            len --
        }

        res.push(floor)
    }

    return res
};
var levelOrder = function(root) {
    var arr = []
    arr.push(root)
    var res = []
    while(arr.length) {
        var floor = []
        var len = arr.length
        while(len >0) {
            var temp = arr.shift()
            if (!temp) break
            floor.push(temp.val)
            if (temp.left) {
                arr.push(temp.left)
            }
            if (temp.right) {
                arr.push(temp.right)
            }
            len--
        }
        res.push(floor)
    }
    
    return res
};
var levelOrder = function(root) {
    if (root == null) return []
    var arr = []
    arr.push(root)
    var res = []

    while (arr.length) {
        var len = arr.length
        var floor = []
        while (len) {
            var temp = arr.shift()
            if (!temp) break
            floor.push(temp.val)

            if (temp.left) {
                arr.push(temp.left)
            }

            if (temp.right) {
                arr.push(temp.right)
            }

            len--
        }

        res.push(floor)
    }

    return res
}

// @lc code=end

