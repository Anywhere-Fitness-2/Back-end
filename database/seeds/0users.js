exports.seed = function(knex) {
    return knex('users')
      .del()
      .then(function() {
        return knex('users').insert([
          {
            id: 1,
            email: 'test3@email.com',
            password: 'password',
            instructor: false,
          },
          {
            id: 2,
            email: 'test21@email.com',
            password: 'password',
            instructor: true,
      },
      {
        id: 3,
        email: 'test22@email.com',
        password: 'password',
        instructor: false,
      },
       {
            id: 4,
            email: 'test@email.com',
            password: 'password',
            instructor: false,
          },
          {
            id: 5,
            email: 'test1@email.com',
            password: 'password',
            instructor: true,
      },
          
        ]);
      });
  };
