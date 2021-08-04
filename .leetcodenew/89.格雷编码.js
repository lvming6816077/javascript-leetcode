/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var res = []
    var back = function(temp,flag) {

        if (temp.length == n) {
            res.push(temp.slice())
            
            return
        }
        if (temp.length>n) {
            return
        }
        if (!flag) {
            for (var i = 1 ; i >= 0 ; i--) {
                temp.push(i)
                back(temp,i)
                temp.pop()
            }
        } else {
            for (var i = 0 ; i <2 ; i++) {
                temp.push(i)
                back(temp,i)
                temp.pop()
            }
        }


    }
    back([],0)
    var ans = []
    console.log(res)
    for (var i = 0 ; i < res.length ; i++) {
        ans.push(parseInt(res[i].join(''),2))
    }

    return ans
};
var grayCode = function(n) {
    let ans = [0];
    let pre = 1;
    for(let i = 0;i<n;i++){
        for(let j = ans.length - 1;j>=0;j--){
            ans.push(pre + ans[j]);
        }
        pre <<= 1;
    }
    return ans;
};


// @lc code=end

