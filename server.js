const express = require('express');
const app =  express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/devforum";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./client/public'));


require("./controllers.js")(router);

mongoose.connect(MONGODB_URI);

app.listen(PORT, (err) =>{
    if(err) throw err;
    console.log(`Server started on port ${PORT}`);
});