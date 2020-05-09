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
        Title: "",
        Author: "",
        Category: "",
        Body: ""
             };
            }
      // When the component mounts, get a list of all available base breeds and update this.state.breed
      // componentDidMount() {
      //   // Simple POST request with a JSON body using fetch
      //   const requestOptions = {
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify({ title: 'React POST Request Example' })
      //   };
      //   fetch("api/posts", requestOptions)
      //       .then(response => response.json())
      //       .then(data => this.setState({ category: data.body}));
      // }
  
      handleInputChange = event => {
        
        console.log(event.target.name, event.target.value);
        const name = event.target.name;
        this.setState({
          
          [name]: event.target.value
          
        });

      };
    
      handleFormSubmit = event => {
        console.log("submit happening");
        event.preventDefault();
        const data = event.target;

        fetch("api/posts",{
          method: "POST",
          body: data,
          }).then((res) => res.json(data)).catch(err =>{
           if(err) throw err;
        });
        
      }

      render () {
        return (
          <div>
            <form onSubmit= {this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="post-title">Post Title:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="post-title" 
                  name="Title" 
                  value={this.state.Title}
                  onChange={this.handleInputChange}
                  aria-describedby="titleHelp"
                />

                <small id="titleHelp" className="form-text text-muted">Give your post a title.</small>
              </div>
              <div className="form-group">
                <label htmlFor="post-author">Author:</label>
                <input
                 type="text" 
                 className="form-control" 
                 id="Author" 
                 name="Author" 
                 value={this.state.Author}
                 onChange={this.handleInputChange}
                 aria-describedby="authorHelp"
                 ></input>
                <small id="authorHelp" className="form-text text-muted">Who is the author of this post?</small>
              </div> 
              <div className="form-group">
                <label htmlFor="categorySelect">Select A Category:</label>
                  <select 
                  className="form-control" 
                  id="categorySelect" 
                  name="Category" 
                  aria-describedby="categoryHelp"
                  value={this.state.Category}
                  onChange={this.handleInputChange} >
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
                <label htmlFor="post-content">Post Content:</label>
                
                <textarea 
                id="post-content" 
                name="Body" 
                cols="30" 
                rows="10" 
                aria-describedby="contentHelp"
                value={this.state.Body}
                onChange={this.handleInputChange} ></textarea>
                <small id="contentHelp" className="form-text text-muted">Write your post here.</small>
              
              <button type = "submit" value = "submit"  className={`forum-btn btn btn-primary post-btn`}>Create Post</button>
              </div>
           
            </form>
          </div>
        )
      }
    }
  
  
  
    export default CreatePost;
    