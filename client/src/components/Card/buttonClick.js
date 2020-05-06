import React from "react";


function buttonClick(props) {
    return(
        <button onClick={props.onClick} className={`forum-btn ${props["data-value"]}`} {...props} />
    );
}

export default buttonClick;





// const axios = require('axios');
// $(document).ready(() =>{
//     $(".enter-btn").on(click, () =>{
//         const category = $(".enter-btn").val();
//         $.ajax({
//             url: `/api/posts/${category}`,
//             method: "GET"
//         }).then(res =>{
//             res.redirect("/posts");
//             res.map(posts => {
//                 $(".card-text").prepend("<a>").addclass("post-link").attr("href", "/api/posts/:category/:id").text(res.title);
//             })
//         });
//     })
// });