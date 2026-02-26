const nums = [1,2,3,4,5]

// const sum = nums.reduce( (acc, crr) => {
    // console.log(acc, crr);
    
    // return acc + crr//accumilatrs the sum of previous values and then prints that acc = 1+2+3+4 curr = 5
    // return acc + crr//based of operation done acc is changed
// })
// }, 10) acc = 10 intial value 
// console.log(sum);

const sum = nums.reduce( (acc,crr) => acc+crr, 0)
console.log(sum);

// const str = ['ehvfsdi ','sadfivybz ','sahbdu']

// const sum = str.reduce( (acc, crr) => {
//     return acc + crr
// })

// console.log(sum);
