let fruits = ['apple', 'mango', 'anas', 'apple', 'orange','mango','mango']

let fruitsObj = fruits.reduce( (acc, crr) => {
    if(acc[crr])
        acc[crr]++
    else        
        acc[crr] = 1
    return acc
    
}, {})

console.log(fruitsObj);
