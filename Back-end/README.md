# Back-end

# End-Points
https://anywherefitness100.herokuapp.com/api/auth/register
https://anywherefitness100.herokuapp.com/auth/login
https://anywherefitness100.herokuapp.com/api/classes
https://anywherefitness100.herokuapp.com/api/classes/search


# DATA SCHEMA
const class_type = {
  yoga: 'yoga',
  running: 'running',
  
}
const class_intensity = {
    low
 medium
 high
}
const user_roles = {
  instructor: 'instructor'
}
// new user POST request sends a user{} authcode object;
// if instructor === 1 user === instructor
const user = {
  email: '', // string
  password: '', // string
  instructor:'',//string
  <!-- role: 'student', // 'student' / 'instructor' / string
  // stretch - payment
  credit_card: '', // string
  credit_card_exp: '', // string
  credit_card_cvv: '', // string
  phone: '', // string
  name: 'Ahmed', // string
  zip: '', // string -->
}
const purchases = {
  user: '', //
  amount: '', //
  fitclass: 0 // class reference
}
const student_classes = {
  user: '', // user email / id
  fitclass: 0 // class id
}
const fitclass = {
  id: 0,
  name: '', // string
  type: '', // class_type
  start_time: '', // string (utc)
  duration: '', // string (minutes)
  intensity: '', // class_intensity
  location: '', // string: zip code
  attendees: '', // string (calculated)
  max_attendees: '', // string (specified by Instructor)
}