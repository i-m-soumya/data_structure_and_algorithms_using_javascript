const nums = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m', 'n', 'o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
}
if (!digits) {
    return []
}
let digits = 23
let result = []
let combination = []
digits = Array.from(String(digits), Number);
dfs(digits, nums, 0, combination, result)
console.log(result)
function dfs(digits, nums, index, combination, result) {
    console.log()
    if (index >= digits.length) {
        let finalCombination = [...combination]
        result.push(finalCombination.join(''))
        return
    }
    for (let i = 0; i < nums[digits[index]].length; i++) {
        combination.push(nums[digits[index]][i])
        dfs(digits, nums, index + 1, combination, result)
        combination.pop()
    }
    return
}