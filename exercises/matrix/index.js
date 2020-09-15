// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {

        arr.push([]);

    }
    let startCol = 0;
    let endCol = n-1;
    let startRow = 0;
    let endRow = n-1;
    let counter = 1;
    while (startCol<=endCol&&startRow<=endRow) {

        for (let x = startCol; x <= endCol; x++) {
            arr[startRow][x]=counter;
            counter++;
        }
        startRow++;
        console.log(arr);
        for (let y = startRow; y <= endRow; y++) {
            arr[y][endCol]=counter;
            counter++;
        }
        endCol--;
        console.log(arr);
        for (let x = endCol; x >= startCol; x--) {
            arr[endRow][x]=counter;
            counter++;
        }
        endRow--;
        console.log(arr);
        for (let y = endRow; y >= startRow; y--) {
            console.log("y="+y+"  "+"startCol="+startCol)
            arr[y][startCol]=counter;
            counter++;
        }
        startCol++;
        console.log(arr);
    }
    return arr;
}

module.exports = matrix;
