const express = require('express');
const router = require('express').Router();
const path = require('path');
const mongoose = require('mongoose');
const models = require('../models');
const passport = require('./passportconfig');
const bcrypt = require('bcrypt')

    

// router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../client/public/index.html")));



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
    
    router.post("/api/posts", (req, res) =>{
        console.log(req.body);
        models.Post.create(req.body).then(function(savedPost){
            return savedPost;
        }
        ).catch(function(error){
            res.json(error);
        })
    });

    router.post("/register", async (req, res) =>{
        
        console.log(req.body)
        try{
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            console.log(hashedPassword)
            models.User.create({
                name: req.body.name,
                password: hashedPassword,
                email: req.body.email
            }).then(dbuser => {
            (res.redirect(200, "/"), 5000)
            }).catch(err => console.log(err));
            
        }catch{
            res.write("<h1>Sorry but your request could not be completed at this time. Please try again later, thank you.</h1>")
            setInterval(res.redirect("/"), 5000)
        };
    });

    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login", 
        failureFlash: true
    }));

    router.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, "../client/public/index.html"));
    })


module.exports = router;





