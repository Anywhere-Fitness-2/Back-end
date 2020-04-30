const db = require("../database/dbConfig.js");

module.exports = {
  add,
  findById,
  findd,
  insert,
  update,
  remove,
  // getUserPosts
};



// function getUserPosts(userId) {
//   return db('posts as p')
//     .join('users as u', 'u.id', 'p.user_id')
//     .select('p.id', 'p.text', 'u.name as postedBy')
//     .where('p.user_id', userId);
// }

function findd() {
    return db("randoms").select("Name","Type","StartTime","Duration","IntensityLevel",
    "Location","RegisteredAttendees","MaxClassSize"
    );
  }


function add (dataToInsert){
  return db('randoms').insert(dataToInsert);
};
function findById(id) {
  return db("randoms").where({ id }).first();
}



function insert(user) {
  return db('randoms')
    .insert(user)
    .then(ids => {
      return getById(ids[0]);
    });
}


function update(id, changes) {
  return db('randoms')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('randoms')
    .where('id', id)
    .del();
}

