// Q No : 45
// Question: How does this keyword behave differently in arrow functions compared to normal functions?
// Expected Output: 

const user = {
    name: "Yash",
    greet: () => {
        console.log(this.name);//
    }
};

user.greet();

//Arrow function does not have its own this keyword it only takes from global due to lexical scope 
//so it throws an error and has value undefined
//         console.log(this.name);
//                          ^

// TypeError: Cannot read properties of undefined (reading 'name')