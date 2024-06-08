/**
 * prints a pyramid for the given number of rows
 */
function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        const hashes = Array(i * 2).join('#')
        const spaces = Array(n - i + 1).join('.')
        const line = spaces + hashes + spaces
        console.log(line)
    }
}

pyramid(3)

/**
 
..#..
.###.
#####

 */

pyramid(10)

/**
 
.........#.........
........###........
.......#####.......
......#######......
.....#########.....
....###########....
...#############...
..###############..
.#################.
###################

 */