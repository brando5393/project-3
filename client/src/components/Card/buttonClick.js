const axios = require('axios');
$(document).ready(() =>{
    $(".enter-btn").on(click, () =>{
        const category = $(".enter-btn").val();
        $.ajax({
            url: `/api/posts/${category}`,
            method: "GET"
        }).then(res =>{
            res.redirect("/posts");
            res.map(posts => {
                $(".card-text").prepend("<a>").addclass("post-link").attr("href", "/api/posts/:category/:id").text(res.title);
            })
        });
    })
});