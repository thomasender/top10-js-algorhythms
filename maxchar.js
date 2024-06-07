/**
 * A function that determines which character of a given input string occurs the most
 * Ignores ' ', '?' and '!' characters
 */
function maxChar(str) {
    const charMap = {};

    for (let char of str) {
        if (char === ' ' || char === '?' || char === '!') continue;
        charMap[char] = ++charMap[char] || 1;
    }

    let max = 0;
    let maxChar = '';
    
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return `${maxChar} occurs ${max} times`;
}

console.log(maxChar('Hello there! How was your day?')) // 'e occurs 3 times'
console.log(maxChar('abbcccdddd')) // 'd occurs 4 times'