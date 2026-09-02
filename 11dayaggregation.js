/*


db.persons.insertMany([
  {
    name: "A",
    hobbies: ["dancing", "cooking"],
  },
  {
    name: "B",
    hobbies: ["dancing", "singing", "music"],
  },
]);


db.persons.aggregate([
{$unwind: "$hobbies"},
{
$group: {
_id: null,
hobbies: { $addToSet: "$hobbies" }
}}])


db.persons.aggregate([
{$unwind: "$hobbies"},
{
$group: {
_id: null,
hobbies: { $addToSet: "$hobbies" }
}}])


db.carts.insertMany([
  {
    name: "Product A",
    quantity: 10,
    price: 5,
  },
  {
    name: "Product B",
    quantity: 20,
    price: 7.5,
  },
  {
    name: "Product C",
    quantity: 5,
    price: 12,
  },
]);


db.carts.aggregate([
{$group: {
_id: null,
total_amount: { $sum: { $multiply: ["$quantity", "$price"] } }
}}])


db.students.insertMany([
  {
    name: "Alice",
    score: 85,
  },
  {
    name: "Bob",
    score: 92,
  },
  {
    name: "Charlie",
    score: 70,
  },
  {
    name: "David",
    score: 60,
  },
  {
    name: "Eve",
    score: 30,
  },
]);

db.students.aggregate([
{
$bucket: {
    groupBy: "$score",
    boundaries: [60, 80, 100],
    default: "Other",
    output: {
    students: { $push: "$$ROOT" }, $$ROOT refers to the entire document being processed in the aggregation pipeline. It allows you to include all fields of the document in the output of the aggregation stage. In this case, it is used to push the entire student document into the "students" array for each bucket.
    }}
}])



*/