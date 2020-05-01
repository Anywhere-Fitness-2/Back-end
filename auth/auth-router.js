const bcrypt = require('bcryptjs');
const router = require('express').Router();
const Users = require('./auth-model');

const generateToken = require('./generate-token');


router.post("/register", (req, res) => {
  let user = req.body; // username, password

  // rounds are 2 to the N times

  // hash the user.password
  const hash = bcrypt.hashSync(user.password, 14);

  // update the user to use the hash
  user.password = hash;
  const token = generateToken(user);
  Users.adds(user)
    .then(saved => {
      res.status(201).json({
        saved,
        token
      })
    })
    .catch(error => {
      console.log(error);
      res.status(500).json("your username is not unique");
    });
});

router.post('/login', (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.email}!`,
          id: user.id,
          instructor: user.instructor,
          token
        });
      } else {
        res.status(401).json({ error: 'Invalid Credentials' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Server could not log user in' });
    });
});

router.get('/logout', (req, res) => {
  res
    .status(200)
    .send({ token: null })
    .json({ message: 'Successfully logged out' });
});

module.exports = router;