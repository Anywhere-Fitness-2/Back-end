const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secret');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(!token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        req.user = decodedToken;
        next();      }
       else {
        req.user = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({ message: 'you cannot proceed without a token' })
  }
};
