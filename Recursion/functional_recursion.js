// REVERSE AN ARRAY USING RECURSION

function reverseArray(i, array) {
    let n = array.length

    if (i >= n / 2) {
        return array
    }

    let temp = array[i]
    array[i] = array[n - i - 1]
    array[n - i - 1] = temp
    reverseArray(i + 1, array)
    return array
}
console.info(reverseArray(0, [1, 2, 3, 4, 5]))

// PALINDROME CHECK

function palindromeCheck(i, string) {
    let n = string.length

    if (i >= n / 2) {
        return true
    }

    if (string[i] != string[n - i - 1]) {
        return false
    }
    return palindromeCheck(i + 1, string)
}

console.info(palindromeCheck(0, "ABAB"))