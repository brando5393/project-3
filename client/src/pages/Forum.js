import React, {Component} from "react";
import axios from "axios";
//context with router, componentDidMount
// const models = require('./models/index');
class Forum extends Component {
    //State 
    state = {

        category: ""
    }

  componentDidMount() {
    axios.get('/api/posts' + this.state.category)
    .then(res => {
      const category = res.data
      this.setState({ category: category });
    })
    .catch(err => this.setState({ error: err.message }));
};

//   render() {
//     const {
//        movies
//     } = this.state;
//     return (
//       <div>
//           <ul>
//           { movies.map(movie => <li>{movie.name}</li>)}
//           </ul>
//       </div>
//     )
//   }
// }
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     axios.get('/api/posts/' + this.state.category)
    //       .then(res => {
    //         if (res.data.status === "error") {
    //           throw new Error(res.data.message);
    //         }
    //         this.setState({ results: res.data.message, error: "" });
    //       })
    //       .catch(err => this.setState({ error: err.message }));
    //   };
    // "/api/posts/:category"

    //Page Specific Logic
    //takes value from importing context, componentDidMount where i do the api call

    //Rendering
    render(){
        const{category}= this.state;
        return(
            <div>
                <ul>
              {category.map(categories => <li>{categories.name}</li>)}
                </ul>
            </div>
        )
    }

}
export default Forum;


