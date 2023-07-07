import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import db from "mongoose";
import routes from "./routes";
import { error } from "console";
import { json, urlencoded } from "body-parser";
import cors from "cors";

const app = express();
app.use(cors())
app.use(json());
app.use(urlencoded({extended:true}));

app.use("/", routes);
app.use((error:Error, req:Request, res:Response) => {
    res.status(500).json({state: "Error", message: error});
});

db.connect(process.env.MONGO_DB_URL!)
    .then(() =>{
        console.log("db Connected");
        app.listen(process.env.PORT, ()=>{
            console.log("Server is running on port 5000");
        });
    })
    .catch((error) => {
        console.log("something went wrong!")
    });