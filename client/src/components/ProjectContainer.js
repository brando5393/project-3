import React, { Component } from "react";
import Forum from "../pages/Forum"
import Home from "../pages/Home";
import CreatePost from "../components/CreatePost"
import {Route, Link, Switch} from "react-router-dom";


class ProjectContainer extends Component {
  
  render() {
    return (
      <div className = "container">
       <Switch>

          <Route exact path= "/" component = {Home} />
          <Route exact path= "/createposts" component = {CreatePost} />
          <Route exact path="/api/posts:category" component = {Forum} />
       </Switch>
        
      </div>
    );
  }
}

export default ProjectContainer;
