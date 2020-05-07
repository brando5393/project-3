    import React, { Component } from 'react';

    //Dropdown of link elements 
    //once link element is selected in dropdown bring user to /posts/:category
    //create route for each category where you will render the create post and a conditional render of the forum page based on selected category
    //research conditional rendering react router dom dropdown
  // <button type="submit" className="btn btn-success" id="create-btn">Create Post</button> */}
//  <button onClick={()=>props.onForumClick(props.heading)}  className={`forum-btn btn btn-primary post-btn ${props}`} value={props.heading}>Create Post</button> */} */}
    
    class CreatePost extends Component {

      constructor(props){

      super(props);

      this.state = {
        postTitle: "",
        author: "",
        category: "",
        postContent: ""
             };
            }
  
      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      }
    
      handleFormSubmit = event => {
        event.preventDefault();
        const data = event.target;

        fetch("/api/posts",{
          method: "POST",
          body: data
        })
      
      }

      render () {
        return (
          <div>
            <form onSubmit= {this.handleFormSubmit}>
              <div className="form-group">
                <label for="post-title">Post Title:</label>
                <input type="text" className="form-control" id="post-title" name="title" aria-describedby="titleHelp"></input>
                <small id="titleHelp" className="form-text text-muted">Give your post a title.</small>
              </div>
              <div className="form-group">
                <label for="post-author">Author:</label>
                <input type="text" className="form-control" id="post-author" name="UserId" aria-describedby="authorHelp"></input>
                <small id="authorHelp" className="form-text text-muted">Who is the author of this post?</small>
              </div> 
              <div className="form-group">
                <label for="categorySelect">Select A Category:</label>
                  <select className="form-control" id="categorySelect" name="category" aria-describedby="categoryHelp">
                    <option value="" selected></option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">Javascript</option>
                    <option value="Node">Node</option>
                    <option value="React">React</option>
                    <option value="Database">Databases</option>
                  </select>
                <small id="categoryHelp" className="form-text text-muted">Select an option so that your post can be placed into the correct category. </small>
              </div>
              <div className="form-group">
                <label for="post-content">Post Content:</label>
                
                <textarea id="post-content" name="body" cols="30" rows="10" aria-describedby="contentHelp"></textarea>
                <small id="contentHelp" className="form-text text-muted">Write your post here.</small>
              
              <button type = "submit" value = "submit"  className={`forum-btn btn btn-primary post-btn`}>Create Post</button>
              </div>
           
            </form>
          </div>
        )
      }
    }
  
  
  
    export default CreatePost;
    