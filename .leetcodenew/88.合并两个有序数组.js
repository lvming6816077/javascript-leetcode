/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var arr = []
    var i = 0 , j = 0,k = 0
    while (i < m && j < n) {
        if (nums2[j] > nums1[i]) {
            arr.push(nums1[i])
            i++
        } else {
            arr.push(nums2[j])
            j++
        }
        // k++
    }
    
    if (i < m) {
        arr = arr.concat(nums1.slice(i,m))
    }
    if (j < n) {
        arr = arr.concat(nums2.slice(j,n))
    }

    for (var i = 0 ; i < arr.concat([]).length ; i++) {
        nums1[i] = arr.concat([])[i]
    }
};
var merge = function(nums1, m, nums2, n) {
    var i = 0 , j = 0
    var arr = []
    while( i< m && j < n) {
        if (nums1[i] > nums2[j]) {
            arr.push(nums2[j])
            j++
        } else {
            arr.push(nums1[i])
            i++
        }
    }

    if (i < m) {
        arr = arr.concat(nums1.slice(i,m))
    }
    if (j < n) {
        arr = arr.concat(nums2.slice(j,n))
    }
    // nums1 = JSON.parse(JSON.stringify(arr))

    for (var i = 0 ; i < arr.length ; i++) {
        nums1[i] = arr[i]
    }
    return nums1
};
var merge = function(nums1, m, nums2, n) {
    var i = m-1,j=n-1,k=m+n-1
    while(i>=0 && j>=0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i]
            i--
        } else {
            nums1[k--] = nums2[j]
            j--
        }
    }

    while(j>=0) {
        nums1[j] = nums2[j]
        j--
    }

    return nums1

}
// @lc code=end

