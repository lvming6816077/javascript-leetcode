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
 class maxQueue {
    constructor(){
        this.items = []
    }
    // 进入队列
    enqueue(ele){
      // 把前面比新元素小的元素都删掉
      while(this.items.length && this.items[this.items.length-1] < ele) {
        this.items.pop()
      }
      this.items.push(ele)
    }
    // 队首出队
    dequeue(ele){
      // 判断是否是需要移出的元素
      if (this.items.length && this.items[0] == ele) {
        this.items.shift()
      }
    }
    // 队首就是最大元素
    front(){
      return this.items[0]
    }
    max(){
        return this.front()// 队首就是最大元素
    }
}
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
var maxSlidingWindow = function(nums, k) {
    if (k == 1) return nums
    var right = 0,left = 0
    var window = new maxQueue()
    var res = []

    while (right < nums.length) {
        var r = nums[right]
        right++
        
        window.enqueue(r)


        while (right-left >= k) {
            var l = nums[left]
            res.push(window.max())

            window.dequeue(l)
            
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

// @lc code=end

