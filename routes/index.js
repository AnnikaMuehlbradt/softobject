const express = require('express');
const router = express.Router();

//const post_controller = require('../controllers/postController');

//router.get('/blog', post_controller.posts);
//router.get('/blog/search', post_controller.posts_search)

router.get('/', function(req, res, next) {
  res.render('posts', {
    title: "Weekly Posts"
  });
});

router.get('/posts', function(req, res, next) {
    res.render('posts', {
      title: "Weekly Posts"
    });
});

router.get('/weekly1', function(req, res, next) {
  res.render('weekly1', {
    title: "Documentation Exploration"
  });
});

router.get('/weekly2', function(req, res, next) {
  res.render('weekly2', {
    title: "Fiber Exploration"
  });
});

router.get('/weekly3', function(req, res, next) {
  res.render('weekly3', {
    title: "Filament Exploration"
  });
});

module.exports = router;