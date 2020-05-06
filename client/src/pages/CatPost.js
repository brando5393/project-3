import React, {Component} from "react";
import Card from "../components/Card";


class CatPost extends Component {
 
    state = {

        category: category
    }

}

handleFormSubmit = event => {
 event.preventDefault();
    axios.get("/api/posts/:category")
        .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ category: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
    
            if(err){
                throw err;
            }else{
                
            }
        };

