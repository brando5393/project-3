import React, { Component } from 'react'
import category from "../jsonContent/homepage.json" 
import Card from "../components/Card"
import axios from "axios"
class Home extends Component {
    state = {
        content: category
    }

    componentDidMount(){
        axios.get("/api/posts").then(data => {
            console.log("api requested");
            console.log(data);
        })
    }

    handleFormSubmit = e => {
       console.log(e)
        console.log("click")

    }
    //redirect how to pass the information, react route pass props /or redirect, routes with params//

    render() {
        return (
            <div className = "row">
                {this.state.content.map(item => (
                    <Card
                    image = {item.image}
                    heading = {item.heading}
                    description = {item.description}
                    onForumClick = {this.handleFormSubmit}
                    />
                ))};
            </div>
        );
    };
};
export default Home;