import fs from 'fs/promises'
import { hashPassword, comparePassword } from './01-bcrypt.js'
import { question, questionInt } from 'readline-sync'
import { sendEmail } from './5.js'
const createUser = async () => {
    const user = {
        id: Date.now(),
        email: question('Enter the email of the user: '),
        password: question('Create a password: '),
        confirm: question('Confirm your password: '),
        verified: false,
        otp: null
    }
    const data = await fs.readFile('./users.json', 'utf-8')
    const users = JSON.parse(data)

    const existingUser = users.find((usr) => {
        return usr.email == user.email
    })

    if (existingUser) return console.log('User already exists!');

    while (user.password != user.confirm) {
        console.log('Passwords donot match');
        user.password = question('Create a password: ')
        user.confirm = question('Confirm your password: ')
    }

    delete user.confirm

    // console.log(user);
    user.password = await hashPassword(user.password)
    // console.log(user)


    users.push(user)
    await fs.writeFile('./users.json', JSON.stringify(users, null, 4))
}

const login = async () => {
    const email = question('Please enter email: ')
    const password = question('Enter your password: ')

    const data = await fs.readFile('./users.json', 'utf8')
    const users = JSON.parse(data)
    // console.log(users);
    const user = users.find((usr) => {
        return usr.email == email
    })
    if (!user) return console.log('User not found!');
    const auth = await comparePassword(password, user.password)
    if (!auth) return console.log('Invalid password!');

    if(!users[user].verified) return console.log('Verify the user to avail services');
    
    console.log('Welcome ' + user.username + '!');
}

const sendOtp = async () => {
    const email = question("Email at sendotp: ")
    const otp = Math.floor(Math.random()*1000000)+1

    const data = await fs.readFile('./users.json', 'utf8')
    const users = JSON.parse(data)
    // console.log(users);
    const userIndex = users.findIndex((usr) => {
        return usr.email == email
    })
    if (userIndex == -1) return console.log('User not found!');
    if(users[userIndex].verified) return console.log('User already verified');
    users[userIndex].otp = otp

    await sendEmail({
        to: email,
        otp
    })

    await fs.writeFile('./users.json',JSON.stringify(users,null, 4))
}

const verifyUser = async () => {
    const email = question("Email: ")
    const otp = questionInt('Otp:')
    const data = await fs.readFile('./users.json', 'utf8')
    const users = JSON.parse(data)
    // console.log(users);
    const userIndex = users.find((usr) => {
        return usr.email == email
    })
    if (userIndex == -1) return console.log('User not found!');
    if(users[userIndex].verified) return console.log('User already verified');
    if(users[userIndex].otp != otp) return console.log('Invalid OTP');
    
    users[userIndex].verified = true
    await fs.writeFile('./users.json',JSON.stringify(users,null, 4))
    console.log('User is verified');
    
}

const app = async () => {
    while (true) {

        console.log('\n===MENU===');
        console.log('0. Exit');
        console.log('1. Create user');
        console.log('2. Login');
        console.log('3. Send Otp');
        console.log('4. Verify User');
        
        const choice = questionInt('Enter you choice: ')

        switch (choice) {
            case 0:
                return;
            case 1:
                await createUser()
                break;
            case 2:
                await login()
                break;
            case 3:
                await sendOtp()
                break
            case 4:
                await verifyUser()
                break
            default:
                break;
        }
    }

}

app()