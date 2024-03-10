const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/indexRoutes');
const protectedRoute = require('./routes/protectedRoutes');
const dotenv = require('dotenv');
var cookieParser = require('cookie-parser')

dotenv.config();
app.use(express.urlencoded({extended: 'false'}))
app.use(express.static('public'))
app.use(cookieParser())
app.set('view engine', 'html');
app.use(express.json());
app.use('/',indexRoutes)
app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})