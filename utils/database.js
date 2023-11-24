import mongoose from "mongoose";

let isConnected = false; //track connection status

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true) //strict mode
    if (isConnected) {
        console.log("=> using existing database connectio MONGODB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_promt",
        });
        isConnected = true;
        console.log("=> using new database connection MONGODB");
    } catch (error) {
        console.log("=> error while connecting with database");
    }
}

