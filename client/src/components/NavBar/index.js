import React from "react";

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
                <a className="nav-link" href="/post">HTML</a>
            </li>
            <li className="nav-item">
                    <a className="nav-link" href="/post">CSS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/post">JavaScript</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/post">Node</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/post">React</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/post">Databases</a>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/form">Create Post</a>
            </li>
        </ul>
    </div>
  </nav>
  );
}

export default NavBar;
