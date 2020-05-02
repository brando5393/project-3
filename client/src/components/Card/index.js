  import React from "react";
  
    
    function Card(props) {
      return (
        <div className="row">
          <div className="col-lg-4">
            <div className="card category-card" style="width: 18rem;">
              <img src="./images/html.jpg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <a href="#" className="btn btn-primary enter-btn" value="html">Enter Forum</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    

export default Card;