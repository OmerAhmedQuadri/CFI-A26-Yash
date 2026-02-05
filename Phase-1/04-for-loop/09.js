// let arr =[]
// let a = Array()
// console.log(arr);
// console.log(a);


import readlineSync from 'readline-sync'


let rows = readlineSync.questionInt("Enter the number of rows:")
let cols = readlineSync.questionInt("Enter the number of columns:")
let matrix = Array(rows)

while (rows<=0 || cols<=0) {
    console.log(rows, cols);
    rows = readlineSync.questionInt("Enter the number of rows:")
    cols = readlineSync.questionInt("Enter the number of columns:")
}

for(let i = 0; i < matrix.length; i++){
    matrix[i]=Array(cols)
    for(let j = 0; j < matrix[i].length; j++){
        matrix[i][j] = readlineSync.questionInt("Enter the element:")
    }
}
console.log(matrix);
