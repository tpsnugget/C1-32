var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:  "Post"
   }]
})

// This is what is sent back for use
module.exports = mongoose.model("User", userSchema)