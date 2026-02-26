import fs from 'fs'
import { questionInt, question } from 'readline-sync'

const db = './users.json'

fs.readFile(db, 'utf-8', (err,data) => {
    if(err) return console.log(err);
    
    let users = JSON.parse(data)
    console.log(users);
    
    console.log(('1- Create a new User'));
    console.log('2- Delete an existing user');
    console.log('3- Update an existing user');
    let choice = questionInt("Enter your choice: ")

    switch (choice) {
        case 1:
            console.log('Please enter the user details below');
            let user1 = {
                name: question("Enter the user name: "),
                age: questionInt("Enter the age: "),
                city: question("Enter the city: ")
            }
            users.push(user1)
            break;
        
        case 2:
            let name2 = question("Enter the name of the user you wan to Delete: ")
            let index2 = users.findIndex( (usr) => usr.name == name2)
            if (index2 == -1) return console.log('User not found');
            users.splice(index2, 1)
            console.log(users);
            break

        case 3 :
            let name3 = question("Enter the name of the user you wan to Update: ")
            let index3 = users.findIndex( (usr) => usr.name == name3)
            if (index3 == -1) return console.log('User not found');
            console.log('Please enter the user details below');
            let user3 = {
                name: question("Enter the user name: "),
                age: questionInt("Enter the age: "),
                city: question("Enter the city: ")
            }
            users[index3] = user3

        default:
            break;
    }
    fs.writeFile(db, JSON.stringify(users, null, 4), (err) => {
        if(err) return console.log(err);
        console.log('Saving');
        
    })
})