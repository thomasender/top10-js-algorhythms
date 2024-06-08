/**
 * @params two strings
 * @returns true if input strings are anagrams of each other, f.e. "tea" and "eat"
 */
function anagramCheck(str, str2) {
    const charMapStr = {}
    const charMapStr2 = {}

    for (let char of str.toLowerCase()) {
        if (char === ' ' || char === '?' || char === '!') continue;
        charMapStr[char] = ++charMapStr[char] || 1;
    }

    for (let char of str2.toLowerCase()) {
        if (char === ' ' || char === '?' || char === '!') continue;
        charMapStr2[char] = ++charMapStr2[char] || 1;
    }

    // Check if charMapStr and charMapStr2 contain the exact same content
    for (key in charMapStr) {
        if (!(charMapStr[key] && charMapStr2[key])) {
            // The objects to not match
            return false
        }
    }

    // Check if charMapStr2 and charMapStr1 contain the exact same content
    for (key in charMapStr2) {
        if (!(charMapStr2[key] && charMapStr[key])) {
            // The objects to not match
            return false
        }
    }
    // The objects match, the two strings are anagrams of each other
    return true
}

console.log(anagramCheck("tea", "eat")) // Expect true
console.log(anagramCheck("otto", "otto")) // Expect true
console.log(anagramCheck("Bad Credit", "Debit Card")) // Expect true
console.log(anagramCheck("tea", "somethingelse")) // Expect false
console.log(anagramCheck("tea", "eatnow")) // Expect false