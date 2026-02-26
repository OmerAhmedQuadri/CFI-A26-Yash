import fs from 'fs'

let users = [
    {name: 'Omer', age: 21, city: 'Hyd'},
    {name: 'Fahad', age: 20, city: 'Towli'},
    {name: 'Fazal', age: 22, city: 'Krmn'},
]

console.log(users);
console.log(typeof users);
let data = JSON.stringify(users, null, 4)
console.log(data);
console.log(typeof data);

fs.writeFile('users.json', data,(error) => {
        if(error) {
            console.log('Oops:');
            console.log(error);
            return
        }
        console.log('Write Success!');
        
    })