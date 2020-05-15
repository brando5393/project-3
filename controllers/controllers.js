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
// Get all posts in a given category
    router.get("/api/posts/:category", (req, res) =>{
        console.log('in single post category')
        models.Post.find((err, posts) =>{
            console.log('posts '+posts)
            if(err){
                throw err;
            }else{
                const postsJson = JSON.parse(posts)
                console.log(postsJson)
                // const filteredPosts = postsJson.filter(x => x.Category === 'CSS')
                // console.log(filteredPosts)
                //res.json(filteredPosts)
                res.json(posts)
            }
        });
    });

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
