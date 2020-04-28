const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./secrets');

module.exports = function generateToken(user) {
  const payload = {
    email: user.email,
    subject: user.id,

    instructor: user.instructor,
   
  };
  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, jwtSecret, options);
};