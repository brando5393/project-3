import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Categories from "./pages/Categories";


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
    } else (this.state.currentPage === "Categories") {
      return <Categories />;
 
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
