import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  topic: String,
    userName: String,
    handle: String,
    time: String,
    dislikes: Number,
    disliked: Number,
    image: String,
    title: String,
    replies: Number,
    retuits: Number,
}, {collection: 'tuits'});
export default schema;

