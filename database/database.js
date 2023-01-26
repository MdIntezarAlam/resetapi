import mongoose from "mongoose";

const connectDB = async () => {
    const DB_URL = "mongodb://localhost:27017/userdatabse"
    try {
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Databse is connected ${DB_URL}`)
    } catch (error) {
        console.log("databse  error hai", error)
    }
}

export default connectDB