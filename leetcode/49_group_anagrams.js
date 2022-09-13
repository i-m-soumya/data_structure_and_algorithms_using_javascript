function groupAnagrams(strs) {
    let strMap = new Map()
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i]
        let sortedWord = word.split('').sort().join('')
        let fetchedFromMap = strMap.get(sortedWord)
        if (fetchedFromMap) {
            fetchedFromMap.push(word)
            strMap.set(sortedWord, fetchedFromMap)
        } else {
            strMap.set(sortedWord, [word])
        }
    }
    let outputArr = []
    strMap.forEach(element => {
        outputArr.push(element)
    })
    return outputArr
}