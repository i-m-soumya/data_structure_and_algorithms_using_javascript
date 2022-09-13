/**
* @desc Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
* @link https://leetcode.com/problems/permutations
* @return void  
*/ 
// APPROACH 1
function permutation1(nums, ds, comb, result) {
    if (comb.length === nums.length) {
        let finalComb = [...comb]
        result.push(finalComb)
        return
    }

    for (let i = 0; i < nums.length; i++) {
        if (!ds[i]) {
            comb.push(nums[i])
            ds[i] = true
            permutation1(nums, ds, comb, result)
            comb.pop()
            ds[i] = false
        }
    }
}
let result = []
let comb = []
let ds = []
let nums = [1, 2, 3]
permutation1(nums, ds, comb, result)
console.log(result)



// APPROACH 2 <---- Less Space complexity

function permutation2(index, nums, res) {
    if (index === nums.length - 1) {
        let finalRes = [...nums]
        res.push(finalRes)
        return
    }
    for (let i = index; i < nums.length; i++) {
        swap(nums, i, index)
        permutation2(index + 1, nums, res)
        swap(nums, i, index)
    }
}

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

let res = []
let numsArr = [1, 2, 3]
permutation2(0, numsArr, res)

console.log(res)