const express = require('express');
const router = require('express').Router();
const path = require('path');
const mongoose = require('mongoose');
const models = require('../models');
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



    


    router.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, "../client/public/index.html"));
    })
module.exports = router;