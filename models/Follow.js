const mongoose=require('mongoose')

const followSchema=new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
    followers:{type: mongoose.Schema.Types.ObjectId, ref: "User"}
},{timestamps:true})

module.exports=mongoose.model("Follower",followSchema)