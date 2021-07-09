/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
var maxSlidingWindow = function(nums, k) {
    if (k == 1) return nums
    var right = 0,left = 0
    var arr = []
    var res = []

    while (right < nums.length) {
        var r = nums[right]
        right++
        
        while(arr.length && arr[arr.length-1] < r) {
            arr.pop()
        }
        arr.push(r)


        while (right-left >= k) {
            var l = nums[left]
            res.push(arr[0])
            if (l == arr[0]) {
                arr.shift()
            }
            
            left++
        }
    }

    return res
};
var maxSlidingWindow1 = function(nums, k) {
    if (!nums.length) return [];
    if (k === 1) return nums;

    // 维护一个单调队列。底层数据结构是双端队列：既可以从队首出队，又可以从队尾删除（出队）
    let queue = [];
    let res = [];
    for(let i = 0; i< nums.length; i++){
        // 过老的，已不再窗口范围的，从队首剔除
        if (queue.length && i - k + 1 > queue[0]) queue.shift();
        // 新入队元素，不符合递减规则，从队尾挨个踢除过小元素。（为了保持新元素入队列后，队列的单调性）
        while(queue.length && nums[queue[queue.length - 1]] <= nums[i])queue.pop();
        queue.push(i);
        // 队首元素即为最大，输出元素
        if(i >= k - 1) res.push(nums[queue[0]]);
    }
    return res;
};
var MaxStack = function() {
    this.stack = []
    return this
};

/** 
 * @param {number} val
 * @return {void}
 */
MaxStack.prototype.push = function(val) {


    while (this.stack.length && this.stack[this.stack.length-1] < val) {
        this.stack.pop();
    }
    

    this.stack.push(val);

};


MaxStack.prototype.shift = function(val) {
    if (this.stack[0] == val) {
        this.stack.shift();
    }


};
MaxStack.prototype.length = function() {
    return this.stack.length;

};



/**
 * @return {number}
 */
MaxStack.prototype.getMax = function() {

    return this.stack[0]
};
// @lc code=end

