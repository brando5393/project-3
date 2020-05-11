import React, {Component} from "react";
import axios from "axios";
//context with router, componentDidMount
// const models = require('./models/index');
class Forum extends Component {
    //State 
    state = {
      category: "",
      posts: []
    }

  componentDidMount= () => {
    this.getPost();
    // axios.get('/api/posts' + this.state.category)
    // .then(res => {
    //   const category = res.data
    //   this.setState({ posts: data });
    // })
    // .catch(err => this.setState({ error: err.message }));
};
  getPost = () => {
    axios.get('/api/posts' + this.state.category)
    .then(res => {
      const data = res.data
      this.setState({ posts: data });
    })
    .catch(err => this.setState({ error: err.message }));
  };
  displayPost = (posts) => {
      return posts.map((post, index) => (
        <div key={index}>
         <h3>{post.category}</h3>
         </div>
      
      )
      )
  };

    //Rendering
    //QUERY TO DATABASE GRAB DATA ATTRIBUTE VALUE THEN TAKE RESPONSE AND APPEND INTO A CARD POST TITLE, AND ID
    render() {
       
        return(
          <div className = "card">
          {this.displayPost(this.state.posts)};
          </div>
          
              )
                }
  }

export default Forum;


