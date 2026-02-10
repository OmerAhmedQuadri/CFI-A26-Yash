// function Flat(arr) {
//     if (!(Array.isArray(arr))) {
//         console.log('enter a valid string');
//         return undefined
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             Flat(arr[i])
//         }
//         else
//             console.log(arr[i]);

//     }
// }

function Flatar(arr, arr2 = []) {
    if (!(Array.isArray(arr))) {
        console.log('enter a valid string');
        return undefined
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            Flatar(arr[i], arr2)
        }
        else
            arr2.push(arr[i])
    }
    return arr2
}

let ar = [
    1, 2,
    [11, 22, 33]
    , 3, 4,
    [55, 66,
        [777, 888]
    ],
    9, 10
]

// Flat(ar)
console.log(Flatar(ar));
