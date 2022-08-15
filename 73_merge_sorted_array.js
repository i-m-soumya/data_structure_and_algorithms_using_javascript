
/**
 * @desc Takes 2 sorted array as input and returns merged sorted array
 * @param {Array} array1
 * @param {Array} array2
 * @return {Array} 
 */
function mergeSortedArray(array1, array2) {
    if (!array1.length) {
        return array2
    } 
    if (!array2.length) {
        return array1
    }
    const mergedArray = []
    let arr1Ptr = array1[0]
    let arr2Ptr = array2[0]
    let i = 1
    let j = 1

    while (arr1Ptr || arr2Ptr) {
        console.log(arr1Ptr, "---", arr2Ptr)
        if (!arr2Ptr || arr1Ptr < arr2Ptr) {
            mergedArray.push(arr1Ptr)
            arr1Ptr = array1[i]
            i++
        } else {
            mergedArray.push(arr2Ptr)
            arr2Ptr = array2[j]
            j++
        }
    }


    return mergedArray

}

console.log(mergeSortedArray([1, 4, 9, 15], [2, 3, 4]))