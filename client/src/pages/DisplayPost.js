import React, {Component} from "react";
import axios from "axios";
// import {Link} from "react-router-dom";
import "../App.css";
// import {MyContext} from "../MyContext";
//context with router, componentDidMount
// const models = require('./models/index');
class DisplayPost extends Component {
   
    //State, this.props.params.category
    state = {
      id: this.props.match.params._id,
      posts: []
        };
    
  // topic = useContext(MyContext)

  componentDidMount= () => {
    const id = this.props.match.params._id;
    console.log(id);
    this.getPost();
            };
  getPost = () => {
    axios.get('/api/posts/' + this.state._id)
    .then(res => {
      const data = res.data
      this.setState({ id: data });
    })
    .catch(err => this.setState({ error: err.message }));
  };
  displayPost = (posts) => {
    console.log(posts)
      return posts.map((post) => (

        <div key={post.id} className='forum-container'>
          <div>{post.Title}</div>
            <div>{post.Author}</div>
            <div>{post.Body}</div>
        </div>
      
      )
      )
  };
    // static contextType = MyContext
    //Rendering
    //QUERY TO DATABASE GRAB DATA ATTRIBUTE VALUE THEN TAKE RESPONSE AND APPEND INTO A CARD POST TITLE, AND ID
    render() {
        // const {} = this.context
        return(
          <div className = "container">
            {this.displayPost(this.state.posts)};
          </div>
              )
                };
      };
export default DisplayPost;