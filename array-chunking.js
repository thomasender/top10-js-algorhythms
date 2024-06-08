/**
 * Takes in an array and a chunksize
 * Chunks up the array in subarrays
 * @params Array, ChunkSize
 * @returns Chunked Array
 */
function chunkArray(array, chunksize) {
    // Keep track of the current index
    let index = 0;
    // Array to push the chunks to
    const chunkedArray = [];

    while (index < array.length) {
        chunkedArray.push(array.slice(index, index + chunksize));
        index = index + chunksize;
    }

    return chunkedArray
}

console.log(chunkArray([1, 2, 3, 4, 5], 3)) // Expect: [[1, 2, 3], [4, 5]]
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)) // Expect: [[1, 2], [3, 4], [5, 6]]
console.log(chunkArray([1, 2, 3], 1)) // Expect: [[1], [2], [3]]
