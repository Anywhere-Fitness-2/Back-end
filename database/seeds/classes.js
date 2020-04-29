
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('randoms').del()
    .then(function () {
      // Inserts seed entries
      return knex('randoms').insert([
<<<<<<< HEAD
        { user_id:3,Name: 'Yoga',Type:'Endurance',StartTime:'9:00 3/24',Duration:"2 Hours"
        ,  IntensityLevel:"High", Location:"123 Street Ave",RegisteredAttendees:"100",
        MaxClassSize:"150"
      
      },
      {user_id:4,Name: 'Running',Type:'Speed',StartTime:'10:00 3/27',Duration:"3 Hours"
      ,  IntensityLevel:"Medium", Location:"123 Street Ave",RegisteredAttendees:"50",
      MaxClassSize:"90"
=======
        { Name: 'Class Name',Type:'Class Type',StartTime:'Time',Duration:"duration"
        ,  IntensityLevel:"level", Location:"Location",RegisteredAttendees:"attendees",
        MaxClassSize:"max", user_id: 3
      
      },
      {Name: 'ClassName',Type:'Type',StartTime:'Time',Duration:"duration"
      ,  IntensityLevel:"level", Location:"Location",RegisteredAttendees:"attendees",
      MaxClassSize:"max", user_id: 4
>>>>>>> 500761086732dd9c7c20d4aec8057f424eed623c
    
    }


      ]);
    });
};
