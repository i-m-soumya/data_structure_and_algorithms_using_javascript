var frequencySort = function (s) {
    //calculating frequency of each characters
    let d = {};
    for (let i of s) {
        d[i] ? (d[i] += 1) : (d[i] = 1);
    }

    //return the response
    return Object.entries(d)
        .sort((a, b) => b[1] - a[1])
        .map((x) => x[0].repeat(x[1]))
        .join("");
};