// let all =[23, 55, 64, 76, 99, 108]
// let even = []

// for (let i = 0; i < all.length; i++) {
//     if(all[i]%2==0)
//         even.push(all[i])
// }
// console.log(even);


let all =[23, 55, 64, 76, 99, 108]

function giveEvens(num) {
    if(!(Array.isArray(num))){
        console.log('Enter valid array')
        return
    }
    let even = []
    
    for (let i = 0; i < num.length; i++) {
        if(num[i]%2==0)
            even.push(num[i])
    }
    return even    
}

console.log(giveEvens({32:21}));
