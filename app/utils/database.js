import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {dbName: "FF_ID_BUYSEL"});
        console.log(`MongoDB connected`);
    }
    catch (error) {
        console.log(error);
    }
}
export default connectToDatabase;