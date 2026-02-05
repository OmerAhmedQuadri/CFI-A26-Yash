//wap that takes two numbers andreturns their sum

// function sum (a, b){
//     let c = a + b
//     return c//or direct 
//     // return a+b
// }

// console.log(sum());//no value as operation in function NaN no operation undefined

function sum (a=10, b=20){//defaulting values
    //if a=10 it is redefined so big no
    let c = a + b
    return c
}

console.log(sum());