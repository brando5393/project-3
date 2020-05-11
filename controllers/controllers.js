const express = require('express');
const router = require('express').Router();
const path = require('path');
const mongoose = require('mongoose');
const models = require('../models');
const bcrypt = require('bcrypt');
const passport = require("passport");
const initializePassport = require("./passportconfig.js");

initializePassport(passport, email => {
    return User.find(user => user.email === email)
})
    router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../client/public/index.html")));

    // pull all posts
    router.get("/api/posts", (req, res) =>{
        models.Post.find((err, posts) =>{
            if(err){
                throw err;
            }else{
                // res.redirect(200, '/posts');
                // res.send('Hello World');
                res.json(posts);
            }
        });
    });
// Get all posts in a given category
    router.get("/api/posts/:category", (req, res) =>{
        models.Post.find((err, posts) =>{
            if(err){
                throw err;
            }else{
                
            }
        });
    });

// Get single post in category 
    router.get("/api/posts/:category/:id", (req, res) =>{
        models.Post.find((err, posts) =>{
            if(err){
                throw err;
            }else{
                // res.redirect(200, '/posts');
                // res.send('Hello World');
                res.json(posts);
            }
        });
    });

// Create Post
    // Get Post Catagory 
    router.post("/api/posts/", (req, res) =>{
        console.log(req.body);
        models.Post.insert(req.body, (err, saved) =>{
            if(err){
                throw err;
            }else{
                // res.redirect(200, '/posts');
                // res.send('Hello World');
                res.json(saved);

                // const postTemplate = {
                //     title: this.title,
                //     author: this.author,
                //     category: this.category,
                //     body: this.body
                // }
            }
        });
    });

    router.post("/register", async (err, req, res) =>{
        try{
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            models.User.create({
                name: req.body.name,
                password: hashedPassword,
                email: req.body.email
            });
            res.write("<h1>Thank you for Registering you will now be redirected to the homepage.</h1>");
            setInterval(res.redirect(200, "/"), 5000)
        }catch{
            if(err) throw err
            res.write("<h1>Sorry but your request could not be completed at this time. Please try again later, thank you.</h1>")
            setInterval(res.redirect("/"), 5000)
        };
    });

    router.get("/login")



    


    router.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, "../client/public/index.html"));
    })
module.exports = router;