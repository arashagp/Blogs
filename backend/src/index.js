import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
import blogRoute from "./Routes/Blogs/blogRoute.js";

app.use(express.json());
app.use(cors());
app.use("/api", blogRoute);

import connected from "./Connection/db.js";
const PORT = process.env.PORT;
const connectionString = process.env.MONGO_URI;

const connect = async (connectionString) => {
    try {
        await connected(connectionString);
        app.listen(PORT);
        console.log(`your app on port ${PORT} and connected to DB`);
    } catch (err) {
        console.log(err);
    }
};

connect(connectionString);
