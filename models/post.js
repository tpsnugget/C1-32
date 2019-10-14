var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
   title: String,
   content: String
})

// This is what is sent back for use
module.exports = mongoose.model("Post", postSchema)