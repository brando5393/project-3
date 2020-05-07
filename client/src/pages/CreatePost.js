import React, { Component } from 'react'
import category from "../jsonContent/homepage.json" 
import CreatePost from "../components/CreatePost"


class CreatePost extends Component {
 

    handleFormSubmit = e => {
       console.log(e)
        console.log("click")

    }


    render() {
        return (
            <div className = "row">
              <CreatePost />
            </div>
        );
    };
};
export default CreatePost;