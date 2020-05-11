if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express = require('express');
const app =  express();
const routes = require('./controllers/controllers');
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/devforum";
const flash = require("express-flash");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./client/public'));
app.use(routes);
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
}))

mongoose.connect(MONGODB_URI);

app.listen(PORT, (err) =>{
    if(err) throw err;
    console.log(`Server started on port ${PORT}`);
});
