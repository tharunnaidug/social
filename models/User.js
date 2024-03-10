const mongoose = require('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/social")


const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String },
    name: { type: String,default:"" },
    phno: { type: Number,default:0 },
    dob: Date,
    image:String,
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post"  },
    followers: { type: mongoose.Schema.Types.ObjectId, ref: "Follow" },
    following: { type: mongoose.Schema.Types.ObjectId, ref: "Following" }
});

module.exports = mongoose.model('User', userSchema);