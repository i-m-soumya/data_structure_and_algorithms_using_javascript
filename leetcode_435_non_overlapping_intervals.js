/*
Given an array of intervals intervals where intervals[i] = [starting, ending], return the minimum number of intervals you need to remove to make the rest of the intervals non - overlapping.

Example 1:
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

Example 2:
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

Example 3:
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */

function removeMinimumInterval(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let end = intervals[0][1]
    let count = 0
    for (let index = 1; index < intervals.length; index++) {
        if (intervals[index][0] < end) {
            count++
            end = Math.min(intervals[index][1], end)
        } else {
            end = intervals[index][1]
        }
    }
    return count
}

console.log(removeMinimumInterval([[1,2],[1,2],[1,2]]))