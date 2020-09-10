var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: {type: String, required: true, unique: true},
    posted_on: {type: Date, required: true},
    tags: {type: Array, required: false},
    content: {type: String, required: true}
  }
);

module.exports = mongoose.model('Post', PostSchema);