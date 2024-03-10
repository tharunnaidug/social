const express = require('express');
const router = express.Router();
const User = require('../models/user');
// const Post=require('.../models/Post')
const Follow=require('../models/follow')
const Following=require('../models/following')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

router.post('/register', async (req, res) => {
    try {
        const { email,username, password } = req.body;
        // console.log(email,username,password)
        const user = new User({email, username, password });
        await user.save();
        const follow=new Follow({user:user._id})
        await follow.save()
        const following=new Following({user:user._id})
        await following.save()
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Registration failed' });
    }
});

router.post('/login', async (req, res) => {
    const key = process.env.JWT_SECRET_KEY;
    try {
        const { username, password } = req.body;
        // console.log(username)
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Username Not Found' });
        }
        const passwordMatch = await User.findOne({ password });
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Wrong Password' });
        }
        const token = jwt.sign({ userId: user._id }, key, {
            expiresIn: '1h',
        });
        //For testing purpose
        res.cookie('token', token, {
            // httpOnly: true,
            maxAge: 3600000, // 1 hour in milliseconds
        });
        res.redirect('../protected/profile')
        // res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

module.exports = router;