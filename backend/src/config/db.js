 import mongoose from "mongoose"
 import exit from "node:process";
 
 export const connectDB = async () => {
    try{
      await mongoose.connect(process.env.Mongo_URI);
     
   console.log ("MongoDB connected Successfully!")
    }
     catch(error){
        console.error("Error connecting to MongoDB", error);
        process.exit(1) // exit if failure
    }
 }
 