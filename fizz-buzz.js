/**
 * Takes in a target number
 * Prints:
 *   - Fizz if current number is multiple for 3
 *   - Buzz if current number is multiple for 5
 *   - FizzBuzz if current number is multiple of 3 and 5
 *   - The current number if not Fizz nor Buzz nor FizzBuzz
 */
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FIZZBUZZ")
        } else if (i % 3 === 0) {
            console.log("FIZZ")
        } else if (i % 5 === 0) {
            console.log("BUZZ")
        } else {
            console.log(i)
        }
    }
    return ''
}

console.log("fizzBuzz(15)", fizzBuzz(15))