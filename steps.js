/**
 * Prints a # in form of steps for given number
 */
function steps(n) {
    for (let i = 1; i <= n; i++) {
        const hashes = createStringFromChar("#", i)
        const spaces = createStringFromChar(" ", n - i)
        console.log(hashes + spaces)
    }
}

steps(10)

/**
 * 
 * @param {*} char 
 * @param {*} n 
 * @returns f.e. createStringFromChar("a", 10) => "aaaaaaaaaa"
 */
function createStringFromChar(char, n) {
    return Array(n + 1).join(char)
}