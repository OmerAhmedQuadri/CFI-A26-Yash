const sayHello = () => {
    console.log('Hello World');
    console.log('This is inside 2nd Function');
}


function pleaseCallThis(func) {
    console.log('This is inside 1st Funtion');
    func('hello')
}

pleaseCallThis((ele)=>{
    console.log('Hello World', ele);
    console.log("This function reference is being passed");
    
})
// This is inside 1st Funtion
// This function reference is being passed

// pleaseCallThis(sayHellp)
// This is inside 1st Funtion
// Hello World
// This is inside 2nd Function


// pleaseCallThis(sayHellp())
// Hello World
// This is inside 2nd Function
// This is inside 1st Funtion
// /home/yash/CFI-A26-Yash/Phase-1/08-array-helpers/04.js:9
//     func()
//     ^

// TypeError: func is not a function