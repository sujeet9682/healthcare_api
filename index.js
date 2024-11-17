import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import router from "./routes/serviceRoute.js"

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;  //browser port
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Database connected.....");
    app.listen(PORT, () => {
        console.log(`our server is running on port ${PORT}`);

    })
}).catch((err) => {
    console.log(err)
});

app.use("/api/services", router)