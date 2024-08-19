import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("เชื่อมต่อ MongoDB สำเร็จ");
    } catch(error) {
        console.log("ไม่สามารถเชื่อมต่อ MongoDB ได้: ", error);
    }
}