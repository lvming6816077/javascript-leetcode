/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * @param {number[]} nums
 */



var ST = function(array){
    
    var build = function(array,left,right){
        if(left == right){
            /*left,right节点中的max、min、sum是哪些元素的结果，通过数组的下标值表示*/
            return {
                left,
                right,
                max:array[left],
                min:array[left],
                sum:array[left]
            };
        }

        var mid = Math.floor(left+(right - left) /2)

        var leftChild = build(array,left,mid)
        var rightChild = build(array,mid+1,right)

        return {
            left,
            right,
            max:Math.max(leftChild.max,rightChild.max),
            min:Math.min(leftChild.min,rightChild.min),
            sum:leftChild.sum+rightChild.sum,
            leftChild,
            rightChild
        }

    }

    
    var query = function(node,left,right){
        if(left<=node.left && right>=node.right){
            return {
                max:node.max,
                sum:node.sum,
                min:node.min
            };
        }else{
            if(left>node.right || right<node.left){
                throw new Error();
            }
            let mid = Math.floor(node.left + (node.right-node.left)/2);
            if(left>mid){
                return query(node.rightChild,left,right);
            }else if(right<=mid){
                return query(node.leftChild,left,right);
            }else{
                let leftRes = query(node.leftChild,left,mid);
                let rightRes = query(node.rightChild,mid+1,right);
                return {
                    max:Math.max(leftRes.max,rightRes.max),
                    min:Math.min(leftRes.min,rightRes.min),
                    sum:leftRes.sum+rightRes.sum
                };
            }
        }
   
    }

    var update = function(node,index,value){
        if(node.left == node.right){
            if(node.left == index){
                node.sum = value;
                node.max = value;
                node.min = value;
                return;
            }else{
                throw new Error();
            }
        }
        let mid = Math.floor(node.left + (node.right-node.left)/2);//按位或0，效果就是向下取整
        if(index<=mid){
            update(node.leftChild,index,value);
            node.max = Math.max(node.leftChild.max,node.max);
            node.min = Math.min(node.leftChild.min,node.min);
            node.sum = node.leftChild.sum + node.rightChild.sum;
        }else{
            update(node.rightChild,index,value);
            node.max = Math.max(node.rightChild.max,node.max);
            node.min = Math.min(node.rightChild.min,node.min);
            node.sum = node.leftChild.sum + node.rightChild.sum;
        }

    }

    this.query = query
    this.update = update

    this.root = build(array,0,array.length-1)
    // console.log(this.root)
}
ST.prototype.wquery = function(left,right){
    return this.query(this.root,left,right)
}
ST.prototype.wupdate = function(index,val){
    this.update(this.root,index,val)
}

var NumArray = function(nums) {
    this.root = new ST(nums)


};


/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.root.wupdate(index,val)
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.root.wquery(left, right).sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

