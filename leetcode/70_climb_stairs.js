
// USING RECURSION
var climbStairs2 = function(n) {
    let result = []
    dfs(4, 0, [], result)
    console.log(result)
};

function dfs(target, base, stack, result) {
    if(target === base) {
        let finalStack = [...stack]
        result.push(finalStack)
        return true
    } 
    if (target < base) {
        return false
    }
    base = base + 1
    stack.push(1)
    dfs(target, base, stack, result)
    base = base - 1 + 2
    stack.pop()
    stack.push(2)
    dfs(target, base, stack, result)
    base = base - 2
    stack.pop()
}

// USING DP
let dp = new Array(5).fill(-1)
console.log(cStairSolver(4, dp))

function cStairSolver(n, dp) {
    if (n == 0 || n == 1) {
        return 1
    }
    if (n < 0) {
        return 0
    }
    dp[n - 1] = dp[n - 1] == -1 ? cStairSolver(n - 1, dp) :  dp[n - 1]
    dp[n - 2] = dp[n - 2] == -1 ? cStairSolver(n - 2, dp) :  dp[n - 2]
        
    dp[n] = dp[n - 1] + dp[n - 2]
    return dp[n]
}