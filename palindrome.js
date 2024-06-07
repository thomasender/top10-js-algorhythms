/**
 * Checks if a given input string is a palindrome
 * @param {*} str 
 * @returns true if input is a palindrome
 */
function palindromeCheck(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
}

console.log("Checking 'otto' for palindrome, expect true:", palindromeCheck("otto"))
console.log("Checking 'anna' for palindrome, expect true:", palindromeCheck("anna"))
console.log("Checking 'madam' for palindrome, expect true:", palindromeCheck("madam"))
console.log("Checking 'racecar' for palindrome, expect true:", palindromeCheck("racecar"))
console.log("Checking 'hej' for palindrome, expect false:", palindromeCheck("hej"))
console.log("Checking 'hello' for palindrome, expect false:", palindromeCheck("hello"))
console.log("Checking 'world' for palindrome, expect false:", palindromeCheck("world"))
console.log("Checking 'rain' for palindrome, expect false:", palindromeCheck("rain"))

/**
 * Checks if a given input string is a palindrome
 * @param {*} str 
 * @returns true if input is a palindrome
 */
function palindromeCheck2(str) {
    const reversed = str.split('').reverse().join('');

    return reversed === str;
}

console.log("Checking 'otto' for palindrome, expect true:", palindromeCheck2("otto"))
console.log("Checking 'anna' for palindrome, expect true:", palindromeCheck2("anna"))
console.log("Checking 'madam' for palindrome, expect true:", palindromeCheck2("madam"))
console.log("Checking 'racecar' for palindrome, expect true:", palindromeCheck2("racecar"))
console.log("Checking 'hej' for palindrome, expect false:", palindromeCheck2("hej"))
console.log("Checking 'hello' for palindrome, expect false:", palindromeCheck2("hello"))
console.log("Checking 'world' for palindrome, expect false:", palindromeCheck2("world"))
console.log("Checking 'rain' for palindrome, expect false:", palindromeCheck2("rain"))