const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema (
  {
      "image": { 
        "png":String,
        "webp":String
      },
      "username":String  
  }
)
const commentOrReplySchema = new Schema ({
  type:{type:String,enum:['comment','reply'],required:true},
  parentId: Number,
  id:Number,
  content: String,
  score:{ type:Number, default:1},
  replyingTo: String,
  user: {
    image: {
      png: String,
      webp: String,
    },
    username: String,
  },

},{timestamps:true})

// const commentSchema = new Schema(
//   {
//     id: Number,
//     content: String,
//     score: Number,
//     user: {
//       image: {
//         png: String,
//         webp: String,
//       },
//       username: String,
//     },
    
//     replies: [replySchema],  },
//   { timestamps: true }
// );

const commentOrReply = mongoose.model("commentOrReply", commentOrReplySchema);
const userModel = mongoose.model("user", userSchema);

module.exports = {commentOrReply,userModel}