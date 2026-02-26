const user = {
    name: 'omer',
    age: 21,
    balance: 101,
    getDetails: function() {
        console.log('This is user function');
        
    }
}

console.log(user);
console.log(user.getDetails);
user.getDetails()