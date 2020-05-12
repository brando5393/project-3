  import React from "react";
  import content from "../../jsonContent/homepage.json"   
  import "./style.css"
   
  

    function Card(props) {
      return (
          <div>
          <div className="col-lg-4">
            <div className="card category-card" >
              <img src= {props.image} className="card-img-top" alt= {props.title} />
              <div className="card-body">
              <h5 className="card-title">{props.heading}</h5>
              <p className="card-text">{props.description}</p>
              <div className="footer">
              <button onClick={()=>props.onForumClick(props.heading)}  className={`forum-btn btn btn-primary enter-btn ${props}`} value={props.heading}>Enter Forum</button>
              </div>
              </div>
              </div>
            </div>
          </div>
        // style={{width: "20rem"}}
        
      );
    }

 
  export default Card;