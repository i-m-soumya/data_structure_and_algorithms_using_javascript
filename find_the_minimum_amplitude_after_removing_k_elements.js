/*
Suppose we have a lit of numbers called nums, and have another value k.If we remove k elements from nums, then find the minimum of(maximum of nums - minimum of nums).

So, if the input is like nums = [4, 10, 3, 2, 8, 9] k = 3, then the output will be 2, because if we remove 10, 8 and 9 then maximum is 4, minimum is 2 so difference is 2.

To solve this, we will follow these steps −

sort the list nums
p := size of nums - k
m := (last element of nums) - nums[0]
for i in range 0 to size of nums - p, do
if nums[i + p - 1] - nums[i] < m, then
m := nums[i + p - 1] - nums[i]
return m
*/

/**
 *
 * @desc Finds the amplitude of a given array after removing k elements
 * @param {Array} nums
 * @param {Number} k
 * @return {Number} 
 */
function findMinAmplitude(nums, k) {
    nums.sort((a, b) => { return a - b })
    console.log(nums)
    let p = nums.length - k
    let m = nums[nums.length - 1] - nums[0]

    for (let i = 0; i < k; i++) {
        if (nums[i + p - 1] - nums[i] < m) {
            m = nums[i + p - 1] - nums[i]
        }
    }

    return m
}

console.log(findMinAmplitude([4, 10, 3, 2, 8, 9], 3))