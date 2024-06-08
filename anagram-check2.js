/**
 * 
 * @param {*} str 
 * @returns the input string sorted with spaces and punctiations removed
 */
function cleanString(str) {
    return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('')
 }

/**
 * @params two strings
 * @returns true if input strings are anagrams of each other, f.e. "tea" and "eat"
 */
function anagramCheckTwo(strA, strB) {
    return cleanString(strA) === cleanString(strB)
}


console.log(anagramCheckTwo("tea", "eat")) // Expect true
console.log(anagramCheckTwo("otto", "otto")) // Expect true
console.log(anagramCheckTwo("Bad Credit", "Debit Card")) // Expect true
console.log(anagramCheckTwo("tea", "somethingelse")) // Expect false
console.log(anagramCheckTwo("tea", "eatnow")) // Expect false