import React, { Component } from 'react'
import content from "../jsonContent/homepage.json" 
import Card from "../components/Card"

export default class Home extends Component {
    state = {
        content
    }
    render() {
        return (
            <div>
                {this.state.content.map(content => (
                    <Card
                    img src = {content.image}
                    card-title = {content.heading}
                    card-text = {content.description}
                    />
                ))};
            </div>
        );
    };
};
