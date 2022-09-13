function lengthOfLongestSubstring(s) {
    let maxLength = 0
    let calculatedLength = 0
    let mapLastOccurence = new Map()
    let windowIndex = 0
    let iterator = 0
    while(iterator < s.length) {
        let lastOccurence = mapLastOccurence.get(s[iterator])
        if(lastOccurence >= windowIndex) {
            windowIndex = lastOccurence + 1
            mapLastOccurence.set(s[iterator], iterator)
            calculatedLength = iterator - windowIndex + 1
            console.log(s[iterator], "--", lastOccurence, "--", calculatedLength, "--", mapLastOccurence)
            if (calculatedLength > maxLength) {
                maxLength = calculatedLength
            }
            
        } else {
            //console.log("else")
            mapLastOccurence.set(s[iterator], iterator)
            calculatedLength += 1
            if (calculatedLength > maxLength) {
                maxLength = calculatedLength
            }
        }
        //console.log(calculatedLength)
        iterator += 1
    }
    return maxLength
}