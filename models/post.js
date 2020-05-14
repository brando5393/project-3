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
    },
    //     Threadcomments:{
    //         Comment: [CommentSchema]
    //     }

});


// const CommentSchema = new Schema ({
//     User: {
//         type: String,
//         required: true
//     }, 
//     Text: {
//         type: String,
//         required: true
//     },
//     Votes:{
//         Type: Number, 
//         required: false
//     } 
// });


const Post = mongoose.model("Post", PostSchema);

module.exports = Post; 