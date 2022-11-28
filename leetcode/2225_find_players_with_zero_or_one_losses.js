/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
 var findWinners = function(matches) {
    const n = matches.length;
    const lost = {};
    let result = [[], []];
    
    for (let i = 0; i < n; i++) {
        const match = matches[i];
		// We still need to add player who won, just to note there is such, in case if he does't lose we need it for the result.
        lost[match[0]] = lost[match[0]] || 0;
		// Just count how many times the player lost
        lost[match[1]] = (lost[match[1]] || 0) + 1;
    }
    
    for (let player in lost) {
		// If zero losses then add to the first array
        if (!lost[player]) result[0].push(player);
		// If one time lost then add to the second array
        if (lost[player] === 1) result[1].push(player);
    }
    
    return result;
};