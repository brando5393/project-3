import React, { Component } from 'react'
import category from "../jsonContent/homepage.json" 
import Card from "../components/Card"

class Home extends Component {
    state = {
        content: category
    }

    handleFormSubmit = e => {
       console.log(e)
        console.log("click")

    }


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