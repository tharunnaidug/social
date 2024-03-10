const jwt = require('jsonwebtoken');


function verifyToken(req, res, next) {
    const key = process.env.JWT_SECRET_KEY;
    const token = req.cookies.token;
    // const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, key);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;