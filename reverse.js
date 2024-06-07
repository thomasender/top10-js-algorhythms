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

function reverseWithSplit(input) {
    return input.toString().split('').reverse().join('');
}

console.log(reverseWithSplit("hello")); // olleh
console.log(reverseWithSplit('Test!')); // !tseT
console.log(reverseWithSplit('esrever')); // reverse


function reverseInt(int) {
    return parseInt(reverseWithSplit(int)) * Math.sign(int);
}

console.log(reverseInt(123)); // 321
console.log(reverseInt(500)); // 5
console.log(reverseInt(-123)); // -321
