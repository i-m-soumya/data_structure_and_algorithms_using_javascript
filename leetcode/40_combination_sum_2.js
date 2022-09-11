/**
* @desc finds the combination of subarray of a given target Leetcode
* @link https://leetcode.com/problems/combination-sum-ii
* @return void  
*/
function sumCombination(candidates, target, index, combination, result) {
    if (target === 0) {
        let ansCombination = [...combination]
        result.push(ansCombination)
        return
    }
    for (let i = index; i < candidates.length; i++) {
        if (i > index && candidates[i] === candidates[i - 1]) {
            continue
        }
        if (candidates[i] > target) {
            break
        }
        combination.push(candidates[i])
        sumCombination(candidates, target - candidates[i], i + 1, combination, result)
        combination.pop()
    }
}

let ans = []
let combination = []
sumCombination([1,1,1,2,2], 4, 0, combination, ans)
console.log(ans)