/*
 * @lc app=leetcode.cn id=1262 lang=javascript
 *
 * [1262] 可被三整除的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums)
{

    var ret = 0
    var temp = []
    const back = (index, list) =>
    {
        var a = temp.slice()
        if (a.length)
        {
            // 调用子递归前，加入解集
            var max = a.reduce((acc, curr) =>
            {
                return acc + curr
            })
            if (max % 3 == 0)
            {
                ret = Math.max(max, ret)
            }
        }

        for (let i = index; i < list.length; i++)
        { // 枚举出所有可选的数
            temp.push(list[i]);       // 选这个数
            back(i + 1, list);         // 基于选这个数，继续递归，传入的是i+1，不是index+1
            temp.pop();               // 撤销选这个数
        }
    };

    back(0, nums);

    return ret;

};
// @lc code=end

