const express = require('express');
const app =  express();
const routes = require('./controllers/controllers');
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/devforum";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./client/public'));
app.use(routes);

mongoose.connect(MONGODB_URI,{useNewUrlParser: true});

app.listen(PORT, (err) =>{
    if(err) throw err;
    console.log(`Server started on port ${PORT}`);
});
