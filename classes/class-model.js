const db = require("../database/dbConfig.js");

module.exports = {
  addss,
  findByIdss,
  finddss,
  updatess,
  removess,
  // getUserPosts
};

function finddss() {
    return db("randoms").select("Name","Type","StartTime","Duration","IntensityLevel",
    "Location","RegisteredAttendees","MaxClassSize","user_id"
    );
  }


function addss (dataToInsert){
  return db('randoms').insert(dataToInsert);
};
// function findByIdss(id) {
//   return db("randoms").where({ id }).first();
// }
function findByIdss(user_id) {
  return db("randoms").where({ user_id })
  .first();
  
}



function insertss(data) {
  return db('randoms')
    .insert(data)
    .then(ids => {
      return findByIds(ids[0]);
    });
}


function updatess(id, changes) {
  return db('randoms')
    .where({ id })
    .update(changes);
}

function updateClassss(id, changes) {
    return db('randoms')
    .where({"user_id": id})
    .update(changes)
}

function removess(id) {
  return db('randoms')
    .where('id', id)
    .del();
}

