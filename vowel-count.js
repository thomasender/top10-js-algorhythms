/**
 * @params string
 * @returns the number of vowels
 */
function vowelCount(str) {
    let count = 0;

    const vowels = 'aeiou'

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log("Counting Vowels in 'thomas', expect 2", vowelCount("thomas"));
console.log("Counting Vowels in 'ffkkmm', expect 0", vowelCount("ffkkmm"));
console.log("Counting Vowels in 'alphabet', expect 3", vowelCount("alphabet"));
console.log("Counting Vowels in 'mississippi', expect 4", vowelCount("mississippi"));