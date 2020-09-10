#! /usr/bin/env node

console.log('This script populates the database with blog posts');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async');
var Post = require('./models/post');

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.dropCollection('posts', function(err, results) {
  if (err) {
    console.log('DROP COLLECTION ERR: ' + err)
  }
});

var posts = [];

function postCreate(title, posted_on, tags, content, cb) {
  postdetail = { 
    title: title,
    posted_on: posted_on,
    tags: tags,
    content: content
  }
  
  var post = new Post(postdetail);
       
  post.save(function (err) {
    if (err) {
      cb(err, null);
      return
    }
    console.log('New Post: ' + post);
    posts.push(post);
    cb(null, post);

  });
}

function createPosts(cb) {
    async.parallel([
        function(callback) {
          postCreate("Title", new Date(''), [""], "", callback);
        },
        function(callback) {
          postCreate("Title", new Date(''), [""], "", callback);
        },
        function(callback) {
          postCreate("Title", new Date(''), ["", ""], "", callback);
        },
        function(callback) {
          postCreate("Title", new Date(''), ["", ""], "", callback); 
        },
        function(callback) {
          postCreate("Title", new Date(''), ["", ""], "", callback);
        
        }], cb); // optional callback: cb
}

async.series([
    createPosts,
], function(err, results) {
    if (err) {
        console.log('FINAL ERR: ' + err);
    }
    else {
        console.log('Posts: ' + posts);
    }
    mongoose.connection.close();
    console.log("Connection closed.")
});



