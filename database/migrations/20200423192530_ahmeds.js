
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();
        users
          .string('email', 100)
          .notNullable()
          .unique();
        users.string('password', 100).notNullable();
        users
          .boolean('instructor')
          .notNullable()
          .defaultTo(false);
      })
    
    .createTable('randoms',randoms =>{
      randoms.increments();
      randoms.string("NAME",128).notNullable();

      randoms.string("TYPE",128).notNullable();
      randoms.string("StartTime",128).notNullable();
      randoms.string("Duration",128).notNullable();
      randoms.string("IntensityLevel",128).notNullable();
      randoms.string("Location",128).notNullable();
      randoms.string("RegisteredAttendees",128).notNullable();
      randoms.string("MaxclassSize",128).notNullable();
      randoms
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
<<<<<<< HEAD
    //   randoms
    //   .integer('class_id')
    //   .unsigned()
    //   .notNullable()
    //   .references('id')
    //   .inTable('randoms')
    //   .onDelete('CASCADE')
    //   .onUpdate('CASCADE');
=======
>>>>>>> 500761086732dd9c7c20d4aec8057f424eed623c
      
      






  
  
  
  })
  

  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users').dropTableIfExists('randoms');

  
  };
  