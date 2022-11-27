let words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"]
const maxWidth = 16
let remainingWidth = maxWidth
let result = []
let stack = []

for (let i = 0; i < words.length; i++) {
    let wordLength = words[i].length
    if (wordLength <= remainingWidth) {
        stack.push(words[i])
        remainingWidth = remainingWidth - wordLength
        remainingWidth = remainingWidth - 1
    } else {
        remainingWidth = remainingWidth + 1
        let sentence = makeSentence(stack.slice(), remainingWidth)
        result.push(sentence)
        stack = []
        stack.push(words[i])
        remainingWidth = maxWidth - words[i].length
        remainingWidth = remainingWidth - 1
    }
}
if (stack.length) {
    remainingWidth = remainingWidth + 1
    let str = stack.join(' ');
    str += ' '.repeat(maxWidth - str.length);
    result.push(str);
}

console.log(result)

function makeSentence(lineWords, width) {
    if (lineWords.length === 1) {
        const line = lineWords[0] + ' '.repeat(width);
        return line;
    }
    
    const end = lineWords.length - 1;
    let index = 0;
    while (width > 0) {
        lineWords[index] += ' ';
        index = (index + 1) % end;
        width--;
    }
    return lineWords.join(' ')
}