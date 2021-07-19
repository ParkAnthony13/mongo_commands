// create a database called 'my_first_db'
use my_first_db

// create students collection
db.createCollection("student")

// create 5 students with the appropriate info
db.students.insert({name: "Ant", home_state: "CA", lucky_number: 13, birthday: {month: 3, day: 13, year: 1993}})
db.students.insert({name: "Sarah", home_state: "CA", lucky_number: 7, birthday: {month: 4, day: 1, year: 1990}})
db.students.insert({name: "Sam", home_state: "CA", lucky_number: 5, birthday: {month: 5, day: 5, year: 2000}})
db.students.insert({name: "James", home_state: "CA", lucky_number: 3, birthday: {month: 6, day: 21, year: 1988}})
db.students.insert({name: "Justin", home_state: "CA", lucky_number: 12, birthday: {month: 7, day: 16, year: 1999}})

// get all students
db.students.find()

// retrieve all students who are from California or Washington
db.students.find({home_state : "CA"})

// Get all students whose luckly number is greater than 3
db.students.find({lucky_number:{$gt:3}})

// get all students whose lucky number is less than or equal to 10
db.students.find({lucky_number:{$lte:10}})

// get all students whose lucky number is between 1 and 9
db.students.find({lucky_number: {$gte:1,$lte:9}}).pretty() // greater tahn equial less than equal range

// add a field to each student collection called 'interests' that is an array. 
// It shoould contain the following entries:
//                                          'coding'
//                                          'brunch'
//                                          'MongoDB'
db.students.updateMany({}, {$set: {"interests":[]}})

// add some unique interests for each particular student into each of their interest arrays
db.students.update({"name":"Ant"}, {$push:{"interests":"snowboarding"}})
db.students.update({"name":"Sarah"}, {$push:{"interests":"surfing"}})
db.students.update({"name":"Sam"}, {$push:{"interests":"walking to mordor"}})
db.students.update({"name":"James"}, {$push:{"interests":"HVAC"}})
db.students.update({"name":"Justin"}, {$push:{"interests":"emo night"}})

// add the interest 'taxes' into someone's interest array
db.students.update({name: "Ant"}, {$push: {interests: 'taxes'}})

// remove the 'taxes' interest you just added
db.students.update({name: "Ant"}, {$pop: {interests: (1)}})

// remove all students who are from California
db.students.remove({home_state:"CA"})   /* */ MUST DO
// db.COLLECTION_NAME.remove({YOUR_QUERY_DOCUMENT}, BOOLEAN)

// db.ninjas.remove({belt: "yellow"}, false) // boolean justOne
// if true: remove only first one encountered
// false: remove all with query condition met

// remove a student by name
db.students.remove({name:"Sarah"})

// remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number:{$gte:5}},true)

// add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.updateMany({}, {$set: {"number_of_belts":0}})

// increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.updateMany({home_state:"CA"}, {$inc:{"number_of_belts":1}})

// Rename the 'number_of_belts' field to 'belts_earned'
db.students.updateMany({}, { $rename: { "number_of_belts": "belts_earned" } } )

// remove the 'lucky_number' field
db.students.updateMany({},{ $unset: { lucky_number: ""}})

// add a 'updated_on' field, and set the value as the current date.
db.students.updateMany({}, {$set: {"updated_on":Date()}})