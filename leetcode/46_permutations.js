/**
* @desc Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
* @link https://leetcode.com/problems/permutations
* @return void  
*/
// APPROACH 1
function permutation(nums, ds, comb, result) {
    if (comb.length === nums.length) {
        let finalComb = [...comb]
        result.push(finalComb)
        return
    }

    for (let i = 0; i < nums.length; i++) {
        if (!ds[i]) {
            comb.push(nums[i])
            ds[i] = true
            permutation(nums, ds, comb, result)
            comb.pop()
            ds[i] = false
        }
    }
}
let result = []
let comb = []
let ds = []
let nums = [1, 2, 3, 4]
permutation(nums, ds, comb, result)

console.log(result.length)