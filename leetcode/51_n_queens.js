
function dfs(col, board, result) {
    if (col === board.length) {
        let strArray = []
        for (let i = 0; i < board.length; i++) {
            let tempStr = ""
            for (let j = 0; j < board.length; j++) {
                tempStr += board[i][j]
            }
            strArray.push(tempStr)
        }
        result.push(strArray)
        return
    }
    for (let row = 0; row < board.length; row++) {
        if (isPossible(row, col, board)) {
            board[row][col] = 'Q'
            dfs(col + 1, board, result)
            board[row][col] = '.'
        }
    }
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
let result = new Array()
let board = Array.from({ length: n }, () => new Array(n).fill('.'))
dfs(0, board, result)
console.log(result)