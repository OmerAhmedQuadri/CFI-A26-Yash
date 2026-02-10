
const arr = [0,1,2,3,4,5,6]


console.log(arr);

let newArr = arr.forEach((val) => {
    return val*2
})
console.log(newArr);//does not create a new array undefined returned
//no use of return only log
//if wanna create an array use map 
console.log(arr);
