import mongoose from "mongoose";
import User from '../models/User.js'

export const createUser = async (data) => {
    try {
        const userData = await User.create(data)
        return userData
    } catch (error) {
        console.log(error);
    }
}

export const users = async () => {
    try {
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error);

    }
}