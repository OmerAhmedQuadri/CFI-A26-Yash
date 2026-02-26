const nums = [23, 54, 66, 99, 62, 84]

const newArr = nums.reduce( (acc,crr) => {
    console.log(acc, crr);
    acc.push(crr)

    return acc
}, [])

console.log(newArr);
