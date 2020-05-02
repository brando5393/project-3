import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Categories from "../pages/Categories";


class ProjectContainer extends Component {
  
  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default ProjectContainer;
