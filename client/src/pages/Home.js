import React, { Component } from 'react'
import category from "../jsonContent/homepage.json" 
import Card from "../components/Card"

class Home extends Component {
    state = {
        content: category
    }
    render() {
        return (
            <div className = "row">
                {this.state.content.map(content => (
                    <Card
                    image = {content.image}
                    heading = {content.heading}
                    description = {content.description}
                    />
                ))};
            </div>
        );
    };
};
export default Home;