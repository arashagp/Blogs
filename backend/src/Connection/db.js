import mongoose from "mongoose";

const connected = async (connectionString) => {
    try {
        await mongoose.connect(connectionString);
    } catch (err) {
        console.log(err);
    }
};

export default connected;
