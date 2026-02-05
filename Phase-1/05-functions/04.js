//Write a function called userDetails takes auser input for username and userrole and prints it

import readlineSync from 'readline-sync'

function userDetails() {
    let userName = readlineSync.question("Enter your name: ")
    let userRole = readlineSync.question("Enter your role: ")
    // console.log(userName);
    // console.log(userRole);
    
    // return userName, userRole//it can only return one value or multiple values defiuned as one ex: array obj
    // return [userName, userRole]
    // let user = {
    //     name: userName,
    //     role: userRole
    // }

    // return user
    return {
        name: userName,
        role: userRole
    }
}

// let n= userDetails().name
let x={}
// x = userDetails()
// let m= userDetails().role//must always call before or undefined
// console.log(n, m);
// console.log(typeof (function()));
// console.log(typeof(userDetails));

// console.log(x);

let f ={1:1,
    2:2
}

let g = {
    3:3,
    4:4
}

let h ={...f}

h= { ...h, ...g}

console.log(h);

