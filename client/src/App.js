import React from "react";
// import {Route, Link, Switch} from "react-router-dom";
import ProjectContainer from "./components/ProjectContainer";
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"

const myContext=React.createContext(defaultValue) 



function App() {
  return(
      <div>
        <Navbar />
        <ProjectContainer />
        <Footer />
      </div>
  );
}

export default App;
