import React from "react";

function NavBar(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#categories"
          onClick={() => props.handlePageChange("Categories")}
          className={props.currentPage === "Categories" ? "nav-link active" : "nav-link"}
        >
          Categories
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#create-post"
          onClick={() => props.handlePageChange("Create-post")}
          className={props.currentPage === "Create-Post" ? "nav-link active" : "nav-link"}
        >
          Create Post
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Sign-In"
          onClick={() => props.handlePageChange("Sign-In")}
          className={props.currentPage === "Sign-In" ? "nav-link active" : "nav-link"}
        >
          Sign In
        </a>
      </li>
          
        
      
    </ul>
  );
}

export default NavBar;
