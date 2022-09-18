
function dfs(col, board) {
    if (col === board.length) {
        return 1
    }
    let result = 0;
    for (let row = 0; row < board.length; row++) {
        if (isPossible(row, col, board)) {
            board[row][col] = 'Q'
            let op = dfs(col + 1, board)
            if (op) {
                result = result + op
            }
            board[row][col] = '.'
        }
    }
    return result
}

function isPossible(row, col, board) {
    const rowCopy = JSON.parse(JSON.stringify(row))
    const colCopy = JSON.parse(JSON.stringify(col))
    while (row >= 0 && col >= 0) {
        if (board[row][col] === 'Q') {
            return false
        }
        row--
        col--
    }
    row = rowCopy
    col = colCopy
    while (col >= 0) {
        if (board[row][col] === 'Q') {
            return false
        }
        col--
    }

    row = rowCopy
    col = colCopy
    while (col >= 0 && row < board.length) {
        if (board[row][col] === 'Q') {
            return false
        }
        col--
        row++
    }
    row = rowCopy
    col = colCopy
    return true
}

let n = 4
let result = 0
let board = Array.from({ length: n }, () => new Array(n).fill('.'))
console.log(dfs(0, board))