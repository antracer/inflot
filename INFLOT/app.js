//jshint esversion:6
const express = require('express');
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/", function(req, res){

    Post.find({}, function(err, posts){
      res.render("home", {
        startingContent: homeStartingContent,
        posts: posts
        });
    });
  });

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  