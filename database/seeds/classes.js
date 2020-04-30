
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('randoms').del()
    .then(function () {
      // Inserts seed entries
      return knex('randoms').insert([
        { Name: 'Class Name',Type:'Class Type',StartTime:'Time',Duration:"duration"
        ,  IntensityLevel:"level", Location:"Location",RegisteredAttendees:"attendees",
        MaxClassSize:"max", user_id: 1
      
      },
      { Name: 'Class Name',Type:'Class Type',StartTime:'Time',Duration:"duration"
        ,  IntensityLevel:"level", Location:"Location",RegisteredAttendees:"attendees",
        MaxClassSize:"max", user_id: 2
      
      },
      {Name: 'ClassName',Type:'Type',StartTime:'Time',Duration:"duration"
      ,  IntensityLevel:"level", Location:"Location",RegisteredAttendees:"attendees",
      MaxClassSize:"max", user_id: 3
    },
    
      {Name: 'ClassName',Type:'Type',StartTime:'Time',Duration:"duration"
      ,  IntensityLevel:"level", Location:"Location",RegisteredAttendees:"attendees",
      MaxClassSize:"max", user_id: 4},
    
        { Name: 'Class Name',Type:'Class Type',StartTime:'Time',Duration:"duration"
        ,  IntensityLevel:"level", Location:"Location",RegisteredAttendees:"attendees",
        MaxClassSize:"max", user_id: 5
      
      }
    ])})}

