import { generateJWT } from '../services/jwt.js'
import { hashPassword } from '../services/bcrypt.js'
import { findAdminByEmail } from '../DOV/admin.js'
import {createUser, users} from '../DOV/user.js'

export const adminLogin = async (req, res) => {
    try {
        console.log('I am at controller');
        
        const loginData = req.loginData
        const token = await generateJWT({
            id : loginData._id,
            email : loginData.email,
            role : loginData.role
        })
        return res.send({
            success: true,
            message: 'Login successful',
            data: {
                admin: {
                    id: loginData._id,
                    fullname: loginData.fullname,
                    email: loginData.email,
                    role: loginData.role
                },
                token
            },
        })
    } catch (error) {
        return res.send({
            sucess: false,
            message: error
        })
    }
}

export const createUserByAdmin = async (req, res) => {
    try {
        if(!req.body){
            return res.status(400).send({
                success: false,
                message: 'fullname, email and password are required'
            })

        }
        const { fullname, email, phone, password } = req.body

        if (!fullname || !email || !password ||!phone) {
            return res.status(400).send({
                success: false,
                message: 'fullname, email and password are required'
            })
        }

        const existing = await users()
        if (existing.find(user => user.email == email)) {
            return res.status(409).send({
                success: false,
                message: 'User with this email already exists'
            })
        }

        const hashed = await hashPassword(password)

        const user = await createUser({
            fullname,
            email,
            phone,
            password: hashed,
            role: 'user',
            verified: { email: true, phone: true },
            tokens: { email: 'null', phone: 'null' }
        })

        return res.status(201).send({
            success: true,
            message: 'User created successfully',
            data: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Internal server error'
        })
    }
}
