//Wap to create an array and read the length and  all the elements from user input
import readlineSync from 'readline-sync'

let arr = []
let n = readlineSync.questionInt("Enter the length of array:")

// for(let i=0; i<n; i++){
//     let x = readlineSync.question(`Enter the ${i} element of array:`)
//     if(isNaN(parseInt(x)))
//         arr.push(x)
//     else
//         arr.push(Number(x))
// }
// console.log(arr);

for(let i = 0; i<n; i++){
    let m = readlineSync.questionInt("enter the length of 2D array or 1 for normal datatypes:")
    if(m<1){
        console.log("Enter a valid input");
        i--
    }
    else if (m>1){
        arr[i] = []
        for(let j=0; j<m;j++){
            let x = readlineSync.question(`Enter the ${j} element of array:`)
            if(isNaN(parseInt(x)))
                arr[i][j] = x
            else
                arr[i][j] = Number(x)
        }   
    }
    else{
        let x = readlineSync.question(`Enter the element of array:`)
        if(isNaN(parseInt(x)))
            arr[i]=x
        else
            arr[i]=Number(x)
    }
}

console.log(arr);
