/**
 * @param {string} palindrome
 * @return {string}
 * @link https://leetcode.com/problems/break-a-palindrome/
 */
var breakPalindrome = function (palindrome) {
    const len = palindrome.length;

    if (len < 2) return '';

    const palArr = palindrome.split('');

    for (let i = 0; i < Math.floor(len / 2); i++) {

        if (palArr[i] === 'a') continue;

        palArr[i] = 'a';

        return palArr.join('');
    }

    palArr[len - 1] = 'b'

    return palArr.join('');
};