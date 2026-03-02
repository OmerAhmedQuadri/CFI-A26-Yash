// Q No : 20
// Question: Create a simple timer app using setInterval() that counts down from 5
// to 0, then prints "Time’s up!".
// Expected Output: Time’s up!

let count = 4

let id = setInterval(() => {
    console.log(count+1);
    
    if (count == 0) {
        console.log('Time\'s up!');
        clearInterval(id)
    }
    count--
}, 1000);