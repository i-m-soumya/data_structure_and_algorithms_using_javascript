var isValid = function(s) {
    let bracketPair = {"[": "]", "{": "}", "(": ")"}
    let stack = []
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        console.log(char, i , bracketPair[stack.pop()])
        if(bracketPair[char]) {
            stack.push(char)
        } else if(bracketPair[stack.pop()] != char) {
            return false
        }
    }
    
    return stack.length === 0 ? true : false
};