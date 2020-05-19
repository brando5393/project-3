import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "../App.css";
// import {MyContext} from "../MyContext";

class Forum extends Component {
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
        
        <div key={post.id} className='forum-container boxed'>
          <Link className="post-link" to ={`/posts/${post.Category}/${post._id}`}><h6>{post.Title}</h6></Link>
        </div>

      
      )
      )
      
  };    // static contextType = MyContext
    
    render() {
        // const {} = this.context
        return(
          <div className = "forum-display">
            {this.displayPost(this.state.posts)}
          </div>
              )
                };
      };
export default Forum;


