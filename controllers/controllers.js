const router = express.router();
const path = require('path');
const db = mongoose.connection;

module.exports = ((router) =>{
    router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../client/public/index.html")));
    
    router.get("/posts:category", (req, res) =>{
        // get all posts from db that match a specific category
    });
    
    router.get("/posts:id", (req, res) =>{
        // get post from db that matches a specific id
    });
    
    router.post("/posts", (req, res) =>{
        // create post
    });
    
    router.patch("/posts:id", (req, res) =>{
        // update votes for specific post
    });
});