import { comparePassword } from '../services/bcrypt.js'
import { findAdminByEmail, findAdminByID } from '../DOV/admin.js'
import { decodeJWT } from '../services/jwt.js'
export const adminLoginMiddleware = async (req, res, next) => {
    try {
        if (!req.body) {
            return res.send({
                sucess: false,
                message: 'Body is required'
            })
        }
        const { email, password } = req.body
        if (!email || !password) {
            return res.send({
                sucess: false,
                message: 'Invalid body'
            })
        }
        const exisitingAdmin = await findAdminByEmail(email)

        if (!exisitingAdmin) {
            console.log('i was at !exisitngAdmin');

            return res.send({
                sucess: false,
                message: 'Invalid credentials'
            })
        }
        console.log(exisitingAdmin.email);
        console.log(exisitingAdmin.password);

        if ((email !== exisitingAdmin.email)) {
            console.log('i was at !email');

            return res.send({
                sucess: false,
                message: 'Admin does not match'
            })
        }
        if (!await comparePassword(password, exisitingAdmin.password)) {
            console.log('i was at !pass');

            return res.send({
                sucess: false,
                message: 'Invalid credentials'
            })
        }
        if (exisitingAdmin.role !== 'admin') {
            console.log('i was at !role');

            return res.send({
                sucess: false,
                message: 'Permission denied'
            })
        }
        console.log('i was at end and not giving a message');

        req.loginData = exisitingAdmin
        next()
    } catch (error) {
        return res.send({
            sucess: false,
            message: error
        })
    }

}

export const adminAuthMiddleware = async (req, res, next) => {
    try {
        const jwtToken = req.headers['auth-token']
        if (!jwtToken) {
            return res.send({
                success: false,
                message: 'Jwt must be provided'
            })
        }
        const adminData = await decodeJWT(jwtToken)
        if (!adminData) {
            return res.status(401).send({
                success: false,
                message: 'Invalid or expired token'
            })
        }
        const admin = await findAdminByID(adminData.id)
        if (!admin || admin.role !== adminData.role) {
            return res.status(401).send({
                success: false,
                message: 'Auth failure'
            })
        }
        req.admin = admin
        next()
    } catch (error) {
        return res.status(401).send({
            success: false,
            message: error.message
        })

    }
}