var climbStairs = function(n) {
    if (n <= 3) {
        return n
    }
    let waysToReach = [0, 1, 2, 3]
    
    for(let i = 4; i <= n; i++) {
        waysToReach.push(waysToReach[i-1] + waysToReach[i-2])
    }
    return waysToReach[n]
};