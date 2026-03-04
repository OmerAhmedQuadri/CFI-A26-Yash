import bcrypt from "bcrypt"

// const pass = 'codeforindia'

export const hashPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 12)
    return hashedPassword
}

// const res = await hashPassword(pass)
// console.log(res);
// console.log(await hashPassword(pass));

export const comparePassword = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword)
    return match
}

// console.log(await comparePassword(pass, '$2b$12$8ssRIDFrNyzHDz4dNWRS2.F6F2xLrF2lV0BHFUnZoWHP7xXEJTY/6'));
