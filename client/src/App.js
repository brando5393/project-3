import React from "react";
// import {Route, Link, Switch} from "react-router-dom";
import ProjectContainer from "./components/ProjectContainer";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
// import AuthContextProvider from "./AuthContext"
// import {MyProvider} from "./MyContext";


function App() {
  return(
      <div>
         
           {/* <AuthContextProvider>
             <MyProvider> */}
                <Navbar />
                <ProjectContainer />
                <Footer />
                {/* </MyProvider>
          </AuthContextProvider> */}
        
      </div>
  );
}

export default App;
