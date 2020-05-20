import React, {Component} from "react";
import axios from "axios";
import "../App.css";
// import {MyContext} from "../MyContext";


class DisplayPost extends Component {
   
    state = {
      Category: this.props.match.params.Category,
      id: this.props.match.params.id,
      post: [],
      comments: []
        };
    
  // topic = useContext(MyContext)

  componentDidMount= () => {
    const id = this.props.match.params.id;
    console.log(id);
    this.getPost();
            };
 
  getPost = () => {
    
    axios.get(`/api/posts/${this.state.Category}/${this.state.id}`)
    .then(res => {
      console.log(res)
      const data = res.data
      this.setState({ post: data[0] || null });
    })
    .catch(err => this.setState({ error: err.message }))
  };
  displayPost = (post) => {
    console.log(post)
    return (
        <div key={post.id} className='forum-container'>
          <div> <h6>Title: {post.Title}</h6></div>
            <div><h6>Author: {post.Author} </h6></div>
            <div>{post.Body}</div>
        </div>
      
       )
  };
  displayComment = (comment) =>{
    console.log(comment)
  }
    
  commentClick= (e) => {
    e.preventDefault()
    console.log("this has clicked")
  }
    // static contextType = MyContext
    render() {
        // const {} = this.context
        return(
          <div>
          <div className = "container">
            {this.displayPost(this.state.post)}
          </div>
          <div className = "comment-container">
            {this.displayComment(this.state.comment)}
          </div>
          <form>
          <textarea id="comment" placeholder="Say something..."></textarea>
          <button id="comment-btn" onClick={this.commentClick}>Post comment!</button>
          </form>
          </div>
              )
                };
      };
export default DisplayPost;