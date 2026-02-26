console.log("Hello");
setTimeout((id) => {
    const user = {
        name: 'John Doe',
        age: 25
    }
    console.log(`User ID: ${id}, User Name: ${user.name}, Age: ${user.age}`);
}, 5000, 1200);

setTimeout(() => {
    console.log('First');
}, 1000);

setTimeout(() => {
    console.log("Seond");
    
}, 1500);