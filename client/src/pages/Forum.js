import React, {Component, useContext} from "react";
import axios from "axios";
import {MyContext} from "../MyContext";
//context with router, componentDidMount
// const models = require('./models/index');
class Forum extends Component {
    //State, this.props.params.category
    state = {
      category: "",
      posts: []
        };

  topic = useContext(MyContext)

  componentDidMount= () => {
    this.getPost();
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
    console.log(posts)
      return posts.map((post, index) => (

        <div key={index}>
         <h3>{post.category}</h3>
        </div>
      
      )
      )
  };
    static contextType = MyContext
    //Rendering
    //QUERY TO DATABASE GRAB DATA ATTRIBUTE VALUE THEN TAKE RESPONSE AND APPEND INTO A CARD POST TITLE, AND ID
    render() {
        const {} = this.context
        return(
          <div className = "card">
            {this.displayPost(this.state.posts)};
          </div>
              )
                };
      };
export default Forum;


