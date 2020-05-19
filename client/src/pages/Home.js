import React, { Component } from 'react'
import category from "../jsonContent/homepage.json" 
import Card from "../components/Card"
import axios from "axios"
// import {MyContext} from "../MyContext"
class Home extends Component {
    // static contextType = MyContext;
    state = {
        content: category
    }

    componentDidMount(){
        axios.get("/api/posts").then(data => {
            console.log("api requested");
            console.log(data);
        })
    }
    //Context to state in class extended - read example article
    // //https://dev.to/evangunawan/react-context-the-easy-way-stateful-component-bh0
    // handleContext = ()=>{
    //     this.setState({content:this.MyContext.topic})
    // }
    handleFormSubmit = e => {
       console.log(e)
        console.log("click")

    }
    //redirect how to pass the information, react route pass props /or redirect, routes with params//

    render() {
        // const {content} = this.state;
        return (
            
            <div className = "row">
                {this.state.content.map(item => (
                    <Card
                    image = {item.image}
                    heading = {item.heading}
                    description = {item.description}
                    onForumClick = {this.handleFormSubmit}
                    />
                ))}
            </div>
        );
    };
};
export default Home;