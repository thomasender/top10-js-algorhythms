/**
 * @params two strings
 * @returns true if input strings are anagrams of each other, f.e. "tea" and "eat"
 */
function anagramCheck(str, str2) {
    const charMapStr = charMap(str)
    const charMapStr2 = charMap(str2)

    
    if (Object.keys(charMapStr).length !== Object.keys(charMapStr2).length) {
        // if the length of the keys do not match, we do not have an anagram
        return false
    }

    for (key in charMapStr) {
        // if the keys do not match, we do not have an anagram
        if (charMapStr[key] !== charMapStr2[key]) {
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

/**
 * @params string
 * @returns a object with:
 *  - a key for each character of the input string
 *  - a number as value for each key, indicating how many characters the input string contains
 */
function charMap(str) {
    const charMap = {}

    // Removes any spaces and punctations from the input string and transforms it to lowerCase
    const normalizedString = str.toLowerCase().replace(/[\W]/g, '')
    for (let char of normalizedString) {
        // Set the number of chars found for given char
        charMap[char] = ++charMap[char] || 1
    }

    return charMap
}
