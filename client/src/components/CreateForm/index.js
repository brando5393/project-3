import React from "react";

function CreateForm(props){
return (

<div className="container">
<header>
</header>
<main>
    <form action="/api/posts" method="POST">
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
          </div>
          <button type="submit" className="btn btn-success" id="create-btn">Create Post</button>
          <button type="reset" className="btn btn-secondary">Reset Form</button>
    </form>
</main>
</div>

    )
}

    export default CreateForm;