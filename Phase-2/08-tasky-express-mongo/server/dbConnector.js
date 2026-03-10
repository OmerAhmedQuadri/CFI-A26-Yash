import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const db = process.env.MONGO_URL

const dbConnect = async () => {
    try {
        await mongoose.connect(db)
        console.log('DB Connected Successfully✅');
    } catch (error) {
        console.log('Eroor connecting to database❌');
        console.log(error);
    }
}

dbConnect()

export default dbConnect