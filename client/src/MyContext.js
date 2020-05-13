import React, {useState, createContext} from "react";
export const MyContext=createContext();




export const MyProvider = (props) => {

   const [topic]=useState([
    {
        searchTerm: "Javascript"

    }
   ])
    
        return (
            <div>
        <MyContext.Provider value={this.state.searchTerm}> 
          {this.props.children}
        </MyContext.Provider>
            </div>
        )
    }
    

