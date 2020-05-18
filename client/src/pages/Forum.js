import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "../App.css";
// import {MyContext} from "../MyContext";
//context with router, componentDidMount
// const models = require('./models/index');
class Forum extends Component {
    //State, this.props.params.category
    state = {
      Category: this.props.match.params.Category,
      posts: []
        };

  // topic = useContext(MyContext)

  componentDidMount= () => {
    console.log(this.props.match.params.Category);
    this.getPost();
            };
  getPost = () => {
    axios.get('/api/posts/' + this.state.Category)
    .then(res => {
      const data = res.data
      this.setState({ posts: data });
    })
    .catch(err => this.setState({ error: err.message }));
  };
  displayPost = (posts) => {
    console.log(posts)
      return posts.map((post) => (

        <div key={post.id} className='forum-container'>
          <Link className="nav-link" to ="/posts/:Category/:id" params={post.id}>{post.Title}</Link>
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
          <div className = "forum-display">
            {this.displayPost(this.state.posts)};
          </div>
              )
                };
      };
export default Forum;


