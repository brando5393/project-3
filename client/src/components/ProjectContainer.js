import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Categories from "../pages/Categories";


class ProjectContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if(this.state.currentPage === "Categories") 
    {
      return <Categories />;
 
    } else (this.state.currentPage === "Create-Post")
    {

      return <Create-Post />;

    }

  };

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
