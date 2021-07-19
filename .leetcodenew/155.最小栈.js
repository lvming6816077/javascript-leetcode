/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.min_stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if (this.min_stack.length == 0) {
        this.min_stack.push(val)
    }
    else if (this.min_stack[this.min_stack.length-1] >= val) {
        this.min_stack.push(val)
    }
    console.log('s'+this.stack)

    console.log(this.min_stack)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        var val = this.stack.pop()

        if (this.min_stack[this.min_stack.length-1] === val) {
            this.min_stack.pop()
        }
    }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

    return this.min_stack[this.min_stack.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// @lc code=end

