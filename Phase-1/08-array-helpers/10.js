let str = ['ehvyibs','vbhefesibv','hfsebvbesksvn']

// let largest = str.reduce( (acc,crr) => {//explicint return
//     if(acc.length <= crr.length)
//         return crr
//     else
//         return acc
// })

let largest = str.reduce( (acc, crr) => acc.length <= crr.length ? crr : acc)//implicent return

let smallest = str.reduce( (acc, crr) => acc.length >= crr.length ? crr : acc)

console.log(largest);
console.log(smallest);
