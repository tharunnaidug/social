const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddle');
const User = require('../models/user');
const Post=require('../models/post')
const Follow=require('../models/follow')
const Following=require('../models/following')

router.get('/profile', verifyToken, async (req, res) => {
    let data;
    let fdata;
    let f1data;
    try {
        const user = await User.findById(req.userId);
        if (!user) {
          console.log("User not found");
        }
        data=user;
      } catch (error) {
        console.error("Error finding user:", error);
      }
    try {
        const f=await Follow.find({user:req.userId})
        const f1=await Following.find({user:req.userId})
        if (!f) {
            console.log("Follow not found");
          }
          fdata=f;
          f1data=f1;
    } catch (error) {
        console.error("Error finding Following:", error);
    }
    res.send({username:data.username,name:data.name,followerslen:data.followers?.length,followinglen:data.following?.length,follow:fdata.followers,follower:f1data.following})
});
router.get('/pro', verifyToken, (req, res) => {
    res.send("You Are Logged In")
});

router.post('/follow',verifyToken,async(req,res)=>{
     
})

module.exports = router;