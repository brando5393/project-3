const express = require('express');
const router = require('express').Router();
const path = require('path');
const mongoose = require('mongoose');
const models = require('../models');
const bcrypt = require('bcrypt');
// const passport = require("passport");
// const initializePassport = require("./passportconfig.js");


//initializePassport(passport, email => {
    //return User.find(user => user.email === email)
//})
   // router.get("/", (req, res) => res.sendFile(path.join(__dirname, "../client/public/index.html")));


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
    router.get("/api/posts/:Category", (req, res) =>{
        console.log(req.params.Category)
        models.Post.find ({ Category: req.params.Category}, (err, posts) => {
            if(err){
                throw err;
            }
        else{
            res.json(posts)
            }
    }
        )
    })

// Get single post in category 
    router.get("/api/posts/:Category/:id", (req, res) =>{
        console.log(req.params.id)
        models.Post.find ({ _id: req.params.id}, (err, posts) => {
            if(err){
                throw err;
            }
        else{
            res.json(posts)
            }
    }
        )
    })


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
    // router.post("/register", async (err, req, res) =>{
    //     try{
    //         const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //         models.User.create({
    //             name: req.body.name,
    //             password: hashedPassword,
    //             email: req.body.email
    //         });
    //         res.write("<h1>Thank you for Registering you will now be redirected to the homepage.</h1>");
    //         setInterval(res.redirect(200, "/"), 5000)
    //     }catch{
    //         if(err) throw err
    //         res.write("<h1>Sorry but your request could not be completed at this time. Please try again later, thank you.</h1>")
    //         setInterval(res.redirect("/"), 5000)
    //     };
    // });

    // router.get("/login", passport.authenticate("local", {
    //     successRedirect: "/",
    //     failureRedirect: "/login", 
    //     failureFlash: true
    // }))
    router.get('*', (req, res) =>{
        console.log("here")
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    })


module.exports = router;
