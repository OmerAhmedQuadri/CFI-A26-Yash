const fruits = ['banana','orange','apple','mango','grapes']

//slice(start, end(optional and exclusive))
let res = fruits.slice(1,4)

console.log(res);
//[ 'orange', 'apple', 'mango' ]


// res = fruits.slice(-3,4)
res = fruits.slice(-3,-1)
console.log(res);
//[ 'apple', 'mango']

res = fruits.slice(1, -1)
console.log(res);
//[ 'orange', 'apple', 'mango' ]