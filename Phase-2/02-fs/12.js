import fs from 'fs/promises'
import chalk from 'chalk'
let userDB = './github-users.json'

async function fetchUsers() {
try {
    let res = await fetch('https://api.github.com/users')
    if(!res.ok)
        return false
    return res.json()
} catch (error) {
    console.log(chalk.redBright('Error fetching user details'));
    throw error
}
}

async function saveUsers(users) {
    try {
        let data = JSON.stringify(users, null, 4)
        await fs.writeFile(userDB, data)
        return {
            ok : true,
            message : 'Data saved successfully'
        }
    } catch (error) {
        // console.log(error);
        return {
            ok : false,
            message : 'Failed to save data'
        }
    }
}

// saveUsers({
//     name: 'omer'
// })

async function main() {
    let users = await fetchUsers()
    users = users.filter( (usr) => {
        return (usr.id % 2 == 0)
    })
    users=users.map( (usr) => {
        return {
            id : usr.id,
            name : usr.login
        }
    })
    let res = await saveUsers(users)
    console.log(res);
    if (res.ok == true) {
        console.log(chalk.greenBright(res.message));
    } else {
        console.log(chalk.greenBright(res.message));
    }
}

main()