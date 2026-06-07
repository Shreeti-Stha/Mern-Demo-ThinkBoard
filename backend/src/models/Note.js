import mongoose from "mongoose";

//1-create a schema
//2-model based off of the shchema

const noteSchema= new mongoose.Schema(
    {
        title: {
            type:String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true} //created and updated at
);

const Note= mongoose.model("Note", noteSchema)

export default Note