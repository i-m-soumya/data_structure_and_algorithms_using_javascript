// fibonacci series using multiple recursion
function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return (fibonacci(n - 1) + fibonacci(n - 2))
}

console.log(fibonacci(4))

//PRINTING SUB SEQUENCES

function subSequence(i, arr) {
    seq = [3, 2, 1]

    if (i >= seq.length) {
        console.log(arr)
        return
    }
    //take
    arr.push(seq[i])
    subSequence(i + 1, arr)
    //not take
    arr.pop()
    subSequence(i + 1, arr)
    
}
subSequence(0, [])