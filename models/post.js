var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    Title: {
        type: String,
        Required: true
    },
    Author: {
        type: String,
        required: true
    },
    Catagory: {
        type: String,
        required: true
    },
    Body: {
        type: String, 
        required: true
    }
});


const Post = mongoose.model("Post", PostSchema);

module.exports = Post; 