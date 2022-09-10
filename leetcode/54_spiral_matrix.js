/**
Given an m x n matrix, return all elements of the matrix in spiral order.
Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

/**
 *
 *
 * @param {*} matrix
 * @return {*} 
 */
function spiralOrder(matrix) {
    if (matrix.length === 0) {
        return []
    }
    let result = []
    let left = 0
    let right = matrix[0].length
    let top = 0
    let bottom = matrix.length

    while (left < right && top < bottom) {
        for (let index = left; index < right; index++) {
            result.push(matrix[top][index])
        }
        top++
        if (top === bottom) {
            break
        }
        for (let index = top; index < bottom; index++) {
            result.push(matrix[index][right - 1])
        }
        right--
        if (left === right) {
            break
        }

        for (let index = right - 1; index >= left; index--) {
            result.push(matrix[bottom - 1][index])
        }
        bottom--
        if (top === bottom) {
            break
        }
        for (let index = bottom - 1; index >= top; index--) {
            result.push(matrix[index][left])
        }
        left++
    }

    return result
}

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))