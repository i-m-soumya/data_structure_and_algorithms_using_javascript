/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let n = nums.length;
    let arr = new Array(n);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = {};
    }

    let ans = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            let countJ = arr[j][diff] || 0
            let countI = arr[i][diff] || 0
            ans += countJ;
            arr[i][diff] = countJ + countI + 1;
        }
    }
    return ans;
};