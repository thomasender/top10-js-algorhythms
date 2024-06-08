/**
 * @params string
 * @returns string with capitalized words
 */
function titleCase(str) {
    return str.split(' ').map(word => {
        return word[0].toUpperCase() + word.split('').splice(1).join('')
    }).join(' ')
}

console.log(titleCase("hello test")) // Expect "Hello Test"
console.log(titleCase("all the words of this string will be uppercase now")) // Expect "All The Word Of This String Will Be Uppercase Now"