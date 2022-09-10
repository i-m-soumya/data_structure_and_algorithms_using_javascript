var fourSum = function (nums, target) {
    let ansMap = new Map()
    nums.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let complement = target - (nums[i] + nums[j])
            let left = j + 1
            let right = nums.length - 1

            while (left < right) {
                if (nums[left] + nums[right] === complement) {
                    //if (!ansMap.has([nums[i], nums[j], nums[left], nums[right]])) {
                    ansMap.set(
                        nums[i].toString() + nums[j].toString() + nums[left].toString() + nums[right].toString(),
                        [nums[i], nums[j], nums[left], nums[right]])
                    //}
                    left++
                } else if (nums[left] + nums[right] < complement) {
                    left++
                } else if (nums[left] + nums[right] > complement) {
                    right--
                }
            }
        }
    }
    console.log(Array.from(ansMap, ([name, value]) => (value)))
};

fourSum([2,2,2,2,2,2,2], 8)