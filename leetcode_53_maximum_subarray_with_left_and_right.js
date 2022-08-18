/**
 *
 * @desc finds the maximum subarray of a given array Leetcode
 * @param {Array} arr
 * @return {Number} 
 */
function maximumSubArray(arr) {
    let dp = []
    dp[0] = arr[0]
    let maxSum = arr[0]
    let left = 0
    let right = 0
    for (let i = 1; i < arr.length; i++) {
        let sum = Math.max(arr[i] + dp[i - 1], arr[i])
        if (sum === arr[i]) {
            left = i
        }
        maxSum = Math.max(maxSum, sum)
        if (maxSum === sum) {
            right = i
        }
        dp[i] = sum
    }
    console.log(left, right)
    return maxSum
}

console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]))