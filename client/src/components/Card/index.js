  import React from "react";
  import content from "../../jsonContent/homepage.json"     

    function Card(props) {
      return (
        
          <div className="col-lg-4">
            <div className="card category-card" style={{width: "18rem"}}>
              <img src= {props.image} className="card-img-top" alt= {props.title} />
              <div className="card-body">
              <h5 className="card-title">{props.heading}</h5>
              <p className="card-text">{props.description}</p>
              <a href="#" class="btn btn-primary enter-btn" value={props.heading}>Enter Forum</a>
              </div>
            </div>
          </div>
        
      );
    }
    
    

export default Card;