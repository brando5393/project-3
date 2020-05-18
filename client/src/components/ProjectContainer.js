import React, { Component } from "react";
import Forum from "../pages/Forum"
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost"
import DisplayPost from "../pages/DisplayPost"
import {Route, Switch} from "react-router-dom";


class ProjectContainer extends Component {
  
  render() {
    return (
      <div className = "container">
       <Switch>
          <Route exact path= "/" component = {Home} />
          <Route exact path= "/createposts" component = {CreatePost} />
          <Route exact path="/posts/:Category" component = {Forum} />
          <Route exact path="/posts/:Category/:id" component = {DisplayPost} />
       </Switch>
        
      </div>
    );
  }
}

export default ProjectContainer;
