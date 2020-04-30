const db = require("../database/dbConfig.js");

module.exports = {
  add,
  findById,
  findd,
  update,
  remove,
  // getUserPosts
};

function findd() {
    return db("randoms").select("Name","Type","StartTime","Duration","IntensityLevel",
    "Location","RegisteredAttendees","MaxClassSize","user_id"
    );
  }


function add (dataToInsert){
  return db('randoms').insert(dataToInsert);
};
function findById(id) {
  return db("randoms").where({ id }).first();
}
function findByIds(user_id) {
  return db("randoms").where({ user_id })
  .first();
  
}



function insert(data) {
  return db('randoms')
    .insert(data)
    .then(ids => {
      return findByIds(ids[0]);
    });
}


function update(id, changes) {
  return db('randoms')
    .where({ id })
    .update(changes);
}

function updateClass(id, changes) {
    return db('randoms')
    .where({"user_id": id})
    .update(changes)
}

function remove(id) {
  return db('randoms')
    .where('id', id)
    .del();
}

