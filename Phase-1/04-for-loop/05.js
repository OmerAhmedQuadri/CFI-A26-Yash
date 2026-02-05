// let matrix = [[11,22,33],[111,222,333],[1000,2000,3000]]
// for (i=0;i<matrix.length;i++){
//     for(j=0;j<matrix[i].length;j++){
//         console.log(matrix[i][j])
//     }
// }
let matrix = [[11,22,33],[111,222,333],[1000,2000,3000]]
// for (i=0;i<matrix.length;i++){
//     let str=''
//     for(j=0;j<matrix[i].length;j++){
//         str=str+matrix[i][j]+' '
//     }
//     console.log(str)
// }

// //sum
// let sum = 0
// for (i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[i].length;j++){
//         console.log(matrix[i][j])
//         sum = sum + matrix[i][j]
//     }
    
// }
// console.log(sum)

//double
for(let i = 0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        matrix[i][j] = matrix[i][j]*10
        console.log(matrix[i][j])
    }
}



