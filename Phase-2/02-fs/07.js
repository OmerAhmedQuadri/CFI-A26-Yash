import { question, questionInt } from 'readline-sync'
import fs from 'fs'

const db = './users.json'
fs.readFile(db ,'utf-8', (err,data) => {    
    if(err) return console.log(err);
    
    let users = JSON.parse(data)
    console.log(users);
    
    let choice = question('do you wan to ad y/n:')

    if(choice == 'y'){
        let user= {
            name: question("Enter name: "),
            age: questionInt("enter age: "),
            city:question('eneter city: ')
        }
        users.push(user)
        fs.writeFile(db, JSON.stringify(users,null,4) , (err) => {
            if(err) return console.log(err);
            
            console.log('Saving');
        })
        
    }
    else console.log('Exiting');
    
})

