const express = require('express');
const router = require('express').Router();
const path = require('path');
const mongoose = require('mongoose');
const models = require('../models');

// router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../client/public/index.html")));
debugger
    // pull all posts
    router.get("/api/posts", (req, res) =>{
        console.log('/api/posts')
        models.Post.find((err, posts) =>{
            debugger
            if(err){
                throw err;
            }else{
                // res.redirect(200, '/posts');
                // res.send('Hello World');
                res.json(posts);
            }
        });
    });
    // Kitten.find().where('name', 'Harold').exec(/*callback*/);

// Get all posts in a given category
    router.get("/api/posts/:Category", (req, res) =>{
        console.log(req.params.Category)
        models.Post.find ({ Category: req.params.Category}, (err, posts) => {
            if(err){
                throw err;
            }
        else{
            res.json(posts)
        }
        
        // .then(data => res.json(data), console.log(data))
        
        // .catch(err => console.log(err))
    }
        )
})
         
        

// Get single post in category 
    router.get("/api/posts/:category/:id", (req, res) =>{
        debugger 
        console.log('test')
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
    
    router.post("/api/posts", (req, res) =>{
        console.log(req.body);
        debugger
        models.Post.create(req.body).then(function(savedPost){
            return savedPost;
        }
        ).catch(function(error){
            res.json(error);
        })
    });

    router.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, "../client/public/index.html"));
    })


module.exports = router;
// const postsJson = JSON.parse(posts)
            // const filteredPosts = postsJson.filter(x => x.Category === 'CSS')
            // debugger
            //     console.log(filteredPosts)
            //     res.json(filteredPosts)
            // debugger
            // console.log(postsJson)
            
            // if (err){
            //     throw err;
            // }else{
            //     // const postsJson = JSON.parse(posts)
            //     // console.log(postsJson)
            //     // const filteredPosts = postsJson.filter(x => x.Category === 'CSS')
              
            //     res.json(posts)