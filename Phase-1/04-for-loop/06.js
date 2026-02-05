// let n =6
// let m =5
// let i = 1

// while (i<=n) {
//     let j=i
//     let str = ''
//     while (j<=m) {
//         str = str + j + ' '
//         j++
//     }
//     console.log(str);
//     i++
// }


// let n = 3
// let m = 4

// for(let i = 1; i<=n; i++){
//     let str = ''
//     for(let j=i;j<=m+i;j++){
//         str = str + j + ' '
//     }
//     console.log(str);
// }

let rows = 4
let cols = 3
let x=1

let matrix = []

for (let i = 0; i < rows; i++) {
    matrix[i]=[]
    for (let j = 0; j < cols; j++) {
        matrix[i][j]=x
        x++
    }
    
}
console.log(matrix);
