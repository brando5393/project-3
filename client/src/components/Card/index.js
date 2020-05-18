  import React from "react";
  import "./style.css";
  import {Link} from "react-router-dom";
   
    function Card(props) {
      return (
          <div>
          <div className="col-lg-4" >
            <div className="card card-custom category-card" >
              <img src= {props.image} className="card-img-top" alt= {props.title} />
              <div className="card-body">
              <h5 className="card-title">{props.heading}</h5>
              <p className="card-text">{props.description}</p>
              <div className="footer">
              <Link to= {"/posts/" + props.heading}>
              <button className={`forum-btn btn btn-primary enter-btn ${props}`} value={props.heading}>Enter Forum</button>
              </Link>
              </div>
              </div>
              </div>
              </div>
          </div>
        // style={{width: "20rem"}}
        
      );
    }

 
  export default Card;