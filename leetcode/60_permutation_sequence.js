
function permutation(n, k) {
    let fact = 1
    let nums = []
    for (let i = 1; i < n; i++) {
        fact = fact * i
        nums.push(i)
    }
    nums.push(n)
    let ans = ""
    k = k - 1
    while (true) {
        ans = ans + nums[Math.floor(k / fact)]
        nums.splice(k / fact, 1)
        if (nums.length === 0) {
            break
        }
        k = k % fact
        fact = fact / nums.length
    }

    return ans
}
console.log(permutation(3, 3))