import React, { createContext, Component } from "react";

import MyContext from "./MyContext";



class MyProvider extends Component {

    state = {

        searchTerm: "Javascript"

    }

    render () {
        return (
        <MyContext.Provider value={{...this.state}}> 
          {this.props.children}
        </MyContext.Provider>
        )
    }
    
}
export default MyProvider;