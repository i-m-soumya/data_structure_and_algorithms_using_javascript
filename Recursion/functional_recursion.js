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
console.info(reverseArray(0, [1,2,3,4,5]))