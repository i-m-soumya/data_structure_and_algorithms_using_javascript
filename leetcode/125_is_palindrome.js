function isPalindrome(s) {
    // Sanitize string
    s = s.toLowerCase().replace(/[\W_]/g, "")

    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}