const Post = require('../models/post');

exports.posts = function(req, res, next) {

  Component.find()
    .exec(function (err, posts) {
      if (err) { return next(err); }
      res.render('blog', { postList: posts });
    });
};

exports.posts_search = function(req, res, next) {

  let tags = req.query.tags;
  let month = req.query.month;
  let year = req.query.year; 
  Component.find({ 'tags': tags, '$expr': { '$eq': [{ '$month': '$posted_on'}, month]} })  // FIX THIS!!! MONTH AND YEAR CAN BE NULL
    .exec(function (err, posts) {
      if (err) { return next(err); }
      if (posts == null) {
        console.log("ERROR: No posts were found. MongoDB query returned no results")
      }
      res.send({ postList: posts }); // CALL THIS VIA AJAX
    });

}