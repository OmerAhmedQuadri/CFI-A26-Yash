import bcrypt from "bcrypt"
import dotenv from 'dotenv'

dotenv.config()

const pass = process.env.pass

const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 12)
    return hashedPassword
}

// const res = await hashPassword(pass)
// console.log(res);
// console.log(await hashPassword(pass));
const comparePassword = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword)
    return match
}

console.log(await comparePassword(pass, '$2b$12$MJybbRE.nJmwBXoqMz3q9O9kDXHoZc0La5tbyMm7HFIP6WyFzmMvC'));
