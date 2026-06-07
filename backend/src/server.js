import express from 'express';
//const express = require("express");
import cors from "cors";
import dotenv from "dotenv"; //dotenv package install to access .env content

import routesNotes from "./routes/routesNotes.js"
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';


dotenv.config(); //call authentication from dotenv 
//console.log(process.env.Mongo_URI)

const app = express();
const PORT = process.env.PORT || 5001


//use of middleware: authentication check, rate limiting(control how ofter someone can do somthing on a websit or app
// (eg. refresh a page, make a request to an API or try to login))
//middleware
app.use(
        cors({
    origin:"http://localhost:5173",
})
);
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);


//our simple custome middleware
// app.use((req, res, next) => {
//     console.log(`Request method is ${req.method} and Request URL is ${req.url}`);
//     next();
// })

app.use("/api/notes", routesNotes);

connectDB().then(() => {
app.listen(PORT, () => {
    console.log("Server started on Port: ",PORT );
})
});