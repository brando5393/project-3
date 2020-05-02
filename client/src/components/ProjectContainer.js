import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Footer from "./Footer";


class ProjectContainer extends Component {
  
  render() {
    return (
      <div>
       <NavBar />
       <div className = "container">
        <Home />
        {/* Content condisionaly renders here */}
       </div>
       <div>
         <Footer />
       </div>
      </div>
    );
  }
}

export default ProjectContainer;
