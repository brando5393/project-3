import React from "react";
// import {Route, Link, Switch} from "react-router-dom";
import ProjectContainer from "./components/ProjectContainer";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import MyProvider from "./MyProvider";




function App() {
  return(
      <div>
         <MyProvider>
        <Navbar />
        <ProjectContainer />
        <Footer />
        </MyProvider>
      </div>
  );
}

export default App;
