  import React from "react";
  
    
    function Card(props) {
      return (
        <div className="card">
          <div className="container">
            <img alt={props.name} src={props.image} />
          </div>
          <div className="content">
          </div>
          
        </div>
      );
    }
    
    

export default Card;