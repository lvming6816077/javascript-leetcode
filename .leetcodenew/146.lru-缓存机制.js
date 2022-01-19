/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */


 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let value = this.map.get(key)
    if(value === undefined){
        return -1;
    }
    this.map.delete(key);//因为被用过，原有位置删除
    this.map.set(key, value);//重新set一次表示最新使用
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        this.map.delete(key);
    }
    this.map.set(key,value);
    if(this.map.size > this.capacity){
        //keys() 返回一个引用的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的key值。
        let keyIterator = this.map.keys();
        this.map.delete(keyIterator.next().value);
    }
};



/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

