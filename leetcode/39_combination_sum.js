/**
* @desc finds the combination of subarray of a given target Leetcode
* @link https://leetcode.com/problems/combination-sum/submissions/
* @return void  
*/
function sumCombination(candidates, target, index, combination, result) {
    if (index == candidates.length) {
        if (target === 0) {
            let ansCombination = [...combination]
            result.push(ansCombination)
        }
        return
    }
    if (candidates[index] <= target) {
        combination.push(candidates[index])
        sumCombination(candidates, target - candidates[index], index, combination, result)
        combination.pop()
    }
    sumCombination(candidates, target, index + 1, combination, result)

}

let ans = []
let combination = []
sumCombination([2, 3, 6, 7], 7, 0, combination, ans)
console.log(ans)