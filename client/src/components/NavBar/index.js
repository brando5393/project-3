import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function NavBar(props) {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">Dev Forum 2.0</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> Menu
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" data-category= "HTML" href="/post">HTML</a>
            </li>
            <li className="nav-item">
                    <a className="nav-link" data-category= "CSS" href="/post">CSS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-category= "Javascript" href="/post">JavaScript</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-category = "Node" href="/post">Node</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-category = "React" href="/post">React</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-category = "Databases" href="/post">Databases</a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to ="/createposts">Create Post</Link>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/posts">Sign In/Sign Up</Link>
            </li>
        </ul>
    </div>
  </nav>
  );
}

export default NavBar;
