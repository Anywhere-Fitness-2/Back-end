
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('randoms').del()
    .then(function () {
      // Inserts seed entries
      return knex('randoms').insert([
        { id:1,Name: 'Yoga',Type:'Endurance',StartTime:'9:00 3/24',Duration:"2 Hours"
        ,  IntensityLevel:"High", Location:"123 Street Ave",RegisteredAttendees:"100",
        MaxClassSize:"150"
      
      },
      {id:2,Name: 'Running',Type:'Speed',StartTime:'10:00 3/27',Duration:"3 Hours"
      ,  IntensityLevel:"Medium", Location:"123 Street Ave",RegisteredAttendees:"50",
      MaxClassSize:"90"
    
    }


      ]);
    });
};
