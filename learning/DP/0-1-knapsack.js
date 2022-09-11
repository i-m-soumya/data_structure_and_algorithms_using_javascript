function knapSack(maxW, weight, value, n, dp) {
    if (maxW === 0 || n === 0) {
        return 0
    }
    if (dp[n - 1][maxW - 1] != -1) {
        console.log('hit')
        return dp[n - 1][maxW - 1]
    }
    if (weight[n - 1] > maxW) {
        return knapSack(maxW, weight, value, n - 1, dp);
    } else {
        dp[n - 1][maxW - 1] = Math.max(value[n - 1] +
            knapSack(maxW - weight[n - 1], weight, value, n - 1, dp),
            knapSack(maxW, weight, value, n - 1, dp));
        return dp[n - 1][maxW - 1]

    }
}

let val = [1, 4, 5, 7];
let wt = [1, 3, 4, 5];
let W = 7;
let n = val.length;

let dp = Array(n).fill().map(() => Array(W).fill(-1));

console.log(knapSack(W, wt, val, n, dp));

console.log(dp) 