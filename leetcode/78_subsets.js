let nums = [1, 2, 3]
let result = []
let combination = []

dfs(0, nums, combination, result)
console.log(result)


function dfs(index, nums, combination, result) {
    if (index >= nums.length) {
        //Base Case
        let finalCombination = [...combination]
        result.push(finalCombination)
        return
    }
    combination.push(nums[index])
    dfs(index + 1, nums, combination, result)
    combination.pop()
    dfs(index + 1, nums, combination, result)
    return
}