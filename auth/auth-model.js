
// async function adds(user) {
//     const [id] = await db("users").insert(user, "id");
  
//     return findByIds(id);
//   }



  const db = require('../database/dbConfig.js');

module.exports = {
  adds,
  find,
  findBy,
  findById
};

function find() {
  return db('users').select(
    'id',
    'email',
    'password',
    'instructor',
    
  );
}

function findBy(filter) {
  return db('users')
    .select('id', 'email', 'password', 'instructor')
    .where(filter);
}

function findById(id) {
  return db('users')
    .select('id', 'email', 'password', 'instructor')
    .where({ id })
    .first();
}

function adds(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}