import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const db = process.env.MONGO_URL
const dbConnect = async () => {
    try {
        await mongoose.connect(db)
        console.log('Successully connected to DB');
    } catch (error) {
        console.log('Unable to connect to DB');
        console.log(error);
    }
}

await dbConnect()

export default dbConnect