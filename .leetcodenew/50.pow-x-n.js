/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    if (x == -1 && n < 0) return 1
    if (x == 1||x == -1) return x
    if (n == 0) return 1
    var _n = Math.abs(n)
    var res = 1

    for (var i = 0 ; i < _n ; i = i+2) {

        res = res * x*x
    }
    
    if (_n%2 == 1) {
        res = res / x 
    }
    return n < 0 ? 1/res : res
};
var myPow = function(x, n) {

    if (x == -1 && n < 0) return 1
    if (x == 1||x == -1) return x
    if (n == 0) return 1
    var _n = Math.abs(n)
    var res = 1
    var base = x

    for (var i = _n ; i > 0 ; i = parseInt(i/2)) {
        
        if(i %2 ==1)
        {

            res=res*base;
        }
        base=base*base;
    }
    

    return n < 0 ? 1/res : res
};
var myPow1 = function(x,n){
    var ans=1,base=x;// ans：幂的结果；base：底数a
    while(n)
    {
        // console.log(n)
        if(n %2 ==1)
        {
        ans=ans*base;
        }
        base=base*base;
        n = parseInt(n / 2);
    }
    return ans;
}

var myPow = function(x,n){
    var base = x
    var ans = 1
    var _n = Math.abs(n)
    while(_n >0) {
        if(_n %2 ==1)
        {
        ans=ans*base;
        }
        base = base * base

        _n = parseInt(_n /2)
    }

    return n< 0 ? 1/ans:ans
}
var myPow = function(x,n) {
    var base = x
    var ans = 1

    var _n = Math.abs(n)

    while (_n > 0) {
        if (_n&1 == 1) {
            ans = ans * base
        }
        base = base * base
        _n = Math.floor(_n/2)
    }

    return n<0 ?1/ans:ans
}
// @lc code=end

