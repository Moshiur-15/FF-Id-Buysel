import mongoose from "mongoose";

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "FF_ID_BUYSEL"
        });
        console.log(`MongoDB connected`);
    }
    catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
}
export default connectToDatabase;