var mongoose = require("mongoose")
const options = {
   useNewUrlParser: true, 
   useUnifiedTopology: true
}
mongoose.connect('mongodb://localhost:27017/blog_demo_2', options)

var Post = require("./models/post")
var User = require("./models/user")

Post.create({
   title: "How to cook shrimp and grits",
   content: "With broth, stone-ground grits, butter, and good cheese"
}, (err, post) => {
   User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
      if (err) {console.log(err)}
      else {
         foundUser.posts.push(post)
         foundUser.save((err, data) => {
            if (err) {console.log(err)}
            else {console.log(data)}
         })}
   })
})