exports.seed = function(knex) {
    return knex('users')
      .del()
      .then(function() {
        return knex('users').insert([
          {
            id: 3,
            email: 'test@email.com',
            password: 'password',
            instructor: false,
          },
          {
            id: 4,
            email: 'test1@email.com',
            password: 'password',
            instructor: true,
      },
          
        ]);
      });
  };