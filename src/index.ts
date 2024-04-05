import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from 'dotenv';
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
import { v2 as cloudinary } from "cloudinary";
import myRestaurantRoute from "./routes/MyRestaurantRoute";
import restaurantRoute from "./routes/RestaurantRoute";
import orderRoute from "./routes/OrderRoute";


mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(()=> console.log("Connected to database!"));


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    })

const app = express();
app.use(express.json())
app.use(cors())

app.get("/health", async (req: Request, res: Response)=> {
    res.send({ message: "health OK!" });
})

// /api/my/user
app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/order", orderRoute);


app.listen(4000, ()=> {
    console.log("server started on localhost: 4000");
})

// /API TWILIO
// const accountSid = 'AC0d1919907b2df00e175f5fd1d1ad25be';
// const authToken = '1c70ab423ddede595d038299cd8a7071';
// const client = require('twilio')(accountSid, authToken);

// Twilio Text
// app.get("/send-text", (req, res) => {
    // GET variables, passed via query string 
    // const { recipient, textmessage } = req.query

// Twilio Whatsapp SMS
// app.post('/whatsapp', async (req, res) => {
//     console.log(req.body);
//     let message = req.body.Body;
//     let senderID = req.body.From;

//     console.log(message);
//     console.log(senderID);


// });

    // //Send Text
    // client.messages
    // .create({
    //     body: 'Help! Abuse happening now. Need assistance immediately. Cannot call.',
    //     from: 'whatsapp:+14155238886',
    //     to: 'whatsapp:+17875184160',
    // }) .then(message => console.log(message.sid))
    //    .done();

// })