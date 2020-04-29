const router = require("express").Router();

const Users = require("./users-model.js");

router.get('/',(req,res)=>{
    Users.findd()
    .then(classes => {
        res.status(400).json(classes)
    })
    
});

router.get('/instructor/:user_id/classes',validateUserIds,(req,res)=>{
  res.status(200).json(req.user);

  
});

router.get('/search',(req,res)=>{
  Users.findd()
  .then(classes => {
      res.status(400).json(classes)
  })
  
});
function validateUserIds(req, res, next) {
  // do your magic!
  const { user_id } = req.params;
  Users. findByIds(user_id)
    .then(user => {
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(400).json({ error: 'Invalid user ID.' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Server error validating user ID' });
    });
}

router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
  const { id } = req.params;
  const changes = req.body;
 
    Users.update(id, changes)
      .then(update => {
        res.status(200).json(`${update} Added Info`);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Failed to update User name' });
      });

});
router.delete('/:id', validateUserId, (req, res) => {
  Users.remove(req.params.id)
    .then(post => {
      res.status(200).json({ message: 'The User has been deleted' });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'The post could not be removed'
      });
    });
});
router.post('/', (req, res) => {
  const schemeData = req.body;

  Users.add(schemeData)
  .then(scheme => {
    res.status(201).json(`Success new scheme Created${scheme}`);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new scheme' });
  });
});
function validateUserId(req, res, next) {
    // do your magic!
    const { id } = req.params;
    console.log(id);
    Users.findById(id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(400).json({ error: 'Invalid user ID.' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Server error validating user ID' });
      });
  }

  function validateUser(req, res, next) {
    // do your magic!
    const user = req.body;
    Users.insert(user)
      .then(users =>
        !users
          ? res.status(400).json({ error: 'no user' })
          : !user.name
          ? res.status(400).json({ error: 'invalid name' })
          : (req.users = users) & next()
      )
      .catch(error => {
        res.status(500).json({ error: 'Error adding User' });
      });
  }
router.get('/:id', validateUserId, (req, res) => {
    // do your magic!
    res.status(200).json(req.user);
  });

function validatePost(req, res, next) {
    // do your magic!
    const { id } = req.params;
    const user = { ...req.body, user_id: id };
    Users.insert(user)
      .then(users =>
        !users & console.log(users)
          ? res.status(400).json({ error: 'no user' })
          : !user.text
          ? res.status(400).json({ message: 'missing post data' })
          : (req.userpost = users) & console.log(users, 'TEST') & next()
      )
      .catch(err => res.status(500).json({ error: 'error' }));
  }

module.exports = router;
