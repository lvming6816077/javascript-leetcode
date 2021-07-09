/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (p.val > q.val) {
        var temp = p
        p = q
        q = temp
    }

    if (p.val < root.val && q.val > root.val) {
        return root
    }

    while(root) {
        if (p.val < root.val && q.val > root.val) {
            // 找到元素位置了 跳出循环
            break
        } else if (p.val < root.val && q.val < root.val) {
            root = root.left
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right
        }
    }

    return root
    
};

var lowestCommonAncestor1 = function(root,p,q) {
    if (p.val <root.val && q.val < root.val) { // 如果两个都比当前节点小，就在左子树上
        return lowestCommonAncestor(root.left, p, q);
     } else if (p.val > root.val && q.val > root.val) {// 如果两个都比当前节点大，就在右子树上
         return lowestCommonAncestor(root.right, p, q);
     }// 否则说明在根子树上
     return root;

}
var lowestCommonAncestor = function(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left,p,q)
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right,p,q)
    }
    return root
    
};


var lowestCommonAncestor = function(root, p, q) {

    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    }

    return root
    
};
// @lc code=end

