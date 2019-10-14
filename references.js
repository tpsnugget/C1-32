var mongoose = require("mongoose")
const options = {
   useNewUrlParser: true, 
   useUnifiedTopology: true
}
mongoose.connect('mongodb://localhost:27017/blog_demo_2', options)

var postSchema = new mongoose.Schema({
   title: String,
   content: String
})
var Post = mongoose.model("Post", postSchema)

var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:  "Post"
   }]
})
var User = mongoose.model("User", userSchema)

// User.create({
//    email: "bob@gmail.com",
//    name: "Bob Belcher"
// })

// Post.create({
//    title: "How to cook pork",
//    content: "On the grill"
// }, (err, post) => {
//    User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
//       if (err) {console.log(err)}
//       else {
//          foundUser.posts.push(post)
//          foundUser.save((err, data) => {
//             if (err) {console.log(err)}
//             else {console.log(data)}
//          })}
//    })
// })
//   find user                         populate field posts in userSchema
//                                                       this actually starts the query
User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
   if (err) {console.log(err)}
   else {console.log(user)}
})