import mongoose from 'mongoose'
import Admin from '../models/Admin.js'


export const findAdminByEmail = async (email) => {
    try {
        const adminData = await Admin.findOne({email})
        return adminData
    } catch (error) {
        console.log(error);
    }
}

export const findAdminByID = async (id) => {
    try {
        const adminData = await Admin.findById(id)
        return adminData
    } catch (error) {
        console.log(error);
    }
}