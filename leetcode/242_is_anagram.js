function isAnagram(s, t) {
    if(s.length != t.length) {
        return false
    }
    let sMap = new Map()
    for(let i = 0; i < s.length; i++) {
        let occurrenceS = sMap.get(s[i])
        if(occurrenceS) {
            sMap.set(s[i], occurrenceS + 1)
        } else {
            sMap.set(s[i], 1)
        }
    }
    for(let j = 0; j < t.length; j++) {
        let occurrenceT = sMap.get(t[j])
        if(!occurrenceT) {
            return false
        }
        if(occurrenceT - 1 != 0) {
            sMap.set(t[j], occurrenceT - 1)
        } else {
            sMap.delete(t[j])
        }
    }
    if(sMap.length) {
        return false
    } else {
        return true 
    }
}