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