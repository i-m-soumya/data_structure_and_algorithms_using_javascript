/**
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place [Space complexity O(1)].

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
 */


function setZeroes(matrix) {
    let firstCell = true
    let rows = matrix.length
    let cols = matrix[0].length  
    for(let i = 0; i < rows; i++) {
        if(matrix[i][0] === 0) {
            firstCell = false
        }
        for(let j = 1; j < cols; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0
            }
        }
    }
    for(let i = rows - 1; i >= 0; i--) {
        for(let j = cols - 1; j >= 1; j--) {
            if(matrix[0][j] === 0 || matrix[i][0] === 0) {
                matrix[i][j] = 0
            }
        }
        if(firstCell === false) {
            matrix[i][0] = 0
        }
    }
    return matrix
};

console.log(setZeroes([[-4,-2147483648,6,-7,0],[-8,6,-8,-6,0],[2147483647,2,-9,-6,-10]]))