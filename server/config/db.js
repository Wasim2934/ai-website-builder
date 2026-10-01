import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDB successfully")
    } catch (error) {
        console.log("db error", error)
        process.exit(1)
    }
}

export default connectDb