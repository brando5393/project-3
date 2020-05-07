import React, {Component} from "react";
// import CreatePost from "../components/CreatPost";
//context with router, componentDidMount

class Forum extends Component {
    //State 
    state = {

        category: ""
    }
    //Page Specific Logic
    //takes value from importing context, componentDidMount where i do the api call

    //Rendering
    render(){
        return(
            <div>
              Forum Page
            </div>
        )
    }

}
export default Forum;


