/* 
Aggregation => for advance searching
$match = same as find() query

db.teachers.aggregate([{$match: {}}])
db.teachers.aggregate([{$match: {name: "A"}}])

$sort
db.teachers.aggregate([{$match: {}}, {$sort: {name: 1, age: -1}}]) // 1 for ascending order and -1 for descending order,{}])

$limit
db.teachers.aggregate([{$match: {}}, {$sort: {name: 1}}, {$limit: 4}]) // 1 for ascending order and -1 for descending order,{}])

db.teachers.aggregate([{ $match: {}}, { $skip: 2 }]);


// $Project => control document field and find() control document
db.students.aggregate([
{ $match: {}}, 
{ $project: { name: 1,
 student_age:"$age",
 total_score: {
 $add: ["$scores.math", "$scores.english", "$scores.science"],
 },

 average_score: {
 $avg: ["$scores.math", "$scores.english", "$scores.science"]
 }, 

 min_score: {
 $min: ["$scores.math", "$scores.english", "$scores.science"]
 },

 max_score: {
 $max: ["$scores.math", "$scores.english", "$scores.science"]
 },

 fullname: {
 $concat: ["$name", " ", "$name"]
 }
  }
 }
]);






*/