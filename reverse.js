/**
 * 
 * @param {*} str 
 * @returns reversed input string
 */
function reverse(str) {
    let reversed = "";

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

console.log(reverse("hello")); // olleh
console.log(reverse('Test!')); // !tseT
console.log(reverse('esrever')); // reverse