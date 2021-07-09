/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root == null) {
        return new TreeNode(val)
    }

    if (root.val == val) {
        return root
    }

    if (root.val < val && root.right == null) {
        root.right = new TreeNode(val)

        return root
    }
    if (root.val > val && root.left == null) {
        root.left = new TreeNode(val)

        return root
    }

    if (root.val < val) {
        insertIntoBST(root.right,val)
    } else {
        insertIntoBST(root.left,val)
    }

    return root

};
var insertIntoBST = function(root, val) {
    var arr = []
    arr.push(root)

    while(arr.length) {
        var temp = arr.pop()
        if (!temp) break
        if (temp.val == val) {
            return root
        }
        if (temp.val > val && temp.left == null) {
            temp.left = new TreeNode(val)

        } else if (temp.val < val && temp.right == null) {
            temp.right = new TreeNode(val)

        }


        if (temp.right) {
            arr.push(temp.right)
        }
        if (temp.left) {
            arr.push(temp.left)
        }
    }

    return root
}
var insertIntoBST = function(root, val) {
    if (root == null) return new TreeNode(val)
    var prev = null
    var cur = root

    while(cur) {
        prev = cur

        if (cur.val > val) {
            cur = cur.left
        } else if (cur.val < val){
            cur = cur.right
        } else {
            return root
        }
    }

    if (prev.val > val) {
        prev.left = new TreeNode(val)
    } else {
        prev.right = new TreeNode(val)
    }

    return root
}
var insertIntoBST = function(root, val) {
    if (root == null) {
        return new TreeNode(val)
    }

    if (root.val == val) return root

    if (root.val < val) {
        root.right = insertIntoBST(root.right,val)
    } else {
        root.left = insertIntoBST(root.left,val)
    }

    return root

};
// @lc code=end

