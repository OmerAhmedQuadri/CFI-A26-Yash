// Q No : 43
// Question: What is the difference between for…of and for…in loops?
// Expected Output:



//for of works only on strings and arrays 
//syntax for ( const ele of obj){}
//at each iteration works on index of array one after other
let arr = [10,20,30]

for (const element of arr) {
    console.log(element);
}

//for in only works on objects
//syntax for (const key in object) {}


let object = {
    name: 'Yash',
    age : 21
}
for (const key in object) {    
    console.log(key, object[key]);
    
}