function solver(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] == ".") {
                for (let c = 1; c <= 9; c++) {
                    if (isSafe(board, i, j, parseInt(c))) {
                        board[i][j] = c.toString()
                        if (solver(board)) {
                            return true
                        } else {
                            board[i][j] = "."
                        }
                    }
                }
                return false
            }
        }
    }
    return true
}

function isSafe(board, row, col, c) {
    for (let index = 0; index < 9; index++) {
        if (board[index][col] == c) {
            return false
        }
        if (board[row][index] == c) {
            return false
        }
    }
    let subBoardRows = Math.floor(row / 3) * 3;
    let subBoardColumns = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (board[i + subBoardRows][j + subBoardColumns] == c)
                return false;
    return true
}

const board =
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]

if (solver(board)) {
    console.log(board)
} else {
    console.log("Unable to solve!")
}
