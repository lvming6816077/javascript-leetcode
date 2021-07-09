/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    var arr = []
    arr.push(root)
    var res = []

    while (arr.length) {
        var len = arr.length
        var floor = []

        while (len > 0) {
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
    // console.log(res)
    return res[res.length-1].shift()
};
var findBottomLeftValue = function(root) {
    var arr = []
    arr.push(root)
    var res = []

    while (arr.length) {

        var len = arr.length
        var floor = []
        while (len > 0) {

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

    return res[res.length-1].shift()
}
// @lc code=end

