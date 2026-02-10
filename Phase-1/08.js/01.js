let user = {
    name: 'yash',
    age : 21,
    //city: 'hyd;
}

function test(usr) {
    const {age, name, city = 'blr', pin = 500071} = usr
    console.log(age, name, city, pin);
    console.log(usr);
    
}

test(user)