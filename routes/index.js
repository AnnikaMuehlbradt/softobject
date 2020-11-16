const express = require('express');
const router = express.Router();

//const post_controller = require('../controllers/postController');

//router.get('/blog', post_controller.posts);
//router.get('/blog/search', post_controller.posts_search)

router.get('/', function(req, res, next) {
  res.render('work', {
    title: "Weekly Experimentation"
  });
});

router.get('/work', function(req, res, next) {
    res.render('work', {
      title: "Weekly Experimentation"
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

router.get('/weekly4', function(req, res, next) {
  res.render('weekly4', {
    title: "Ply/Braid Exploration"
  });
});

router.get('/weekly5', function(req, res, next) {
  res.render('weekly5', {
    title: "Knit Exploration"
  });
});

router.get('/weekly6', function(req, res, next) {
  res.render('weekly6', {
    title: "Weave Exploration"
  });
});

router.get('/weekly7', function(req, res, next) {
  res.render('weekly7', {
    title: "Tasty Leather"
  });
});

router.get('/weekly8', function(req, res, next) {
  res.render('weekly8', {
    title: "Materials for Textile Electronics"
  });
});

router.get('/weekly9', function(req, res, next) {
  res.render('weekly9', {
    title: "Rigid and Flexible Electronics"
  });
});

router.get('/weekly10', function(req, res, next) {
  res.render('weekly10', {
    title: "Routing"
  });
});

module.exports = router;