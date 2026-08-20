
// // Example 2 Schema

// db.students.insertOne({
// "name": "nitan", string
// "password": "Password@123", string
// "email":"abc@gmail.com", string
// "height":5.5, number
// "phoneNumber": "9881234757", string
// "roll": 12, int
// "isMarried": false, boolean
// "gender": "male", string
// "dob": new Date("2000-01-01"), date
// "location": { 
// "country": "nepal",
// "exactLocation": "sindhuli"
// },
 


// location: {
// bsonType: "object",
// required: ["country", "exactLocation"],
// properties: {
//   country: {
//   bsonType: "string",
//  description: "country required and must be a string"},
//  exactLocation: {
//   bsonType: "string",
//  description: "exactLocation required and must be a string"}
//  }
// }



// favTeacher: {
//     bsonType: "array",
//     description: "favTeacher must be an array",
//     items: {
//         bsonType: "string",
//         description: "each teacher must be a string"
//     }
// }


// favSubjects: {
//     bsonType: "array",
//     items: {
//         bsonType: "array", 
//         description: "Array of favorite subjects",
//         minlength: 3,
//         maxlength: 20,
//         items: {
//             bsonType: "object",
//             required: ["bookName", "bookAuthor"],
//             properties: {
//                 bookName: {
//                     bsonType: "string",
//                     description:  "Book name required"
//                 },
//                 bookAuthor: {
//                     bsonType: "string",
//                     description:  "Book author required"
//                 }
//             }
//         }
//     }
// }


// //password validation

// min 8 character
// max 20 character
// must have atleast one uppercase
// must  have atleast one lowercase
// must have atleast one special character
// must have atleast one number


// regex ** topic

// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$ = regex for password validation


//     password: {
//         bsonType: "string",
//         description: "Password must be a string and follow the specified rules",
//         pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*(),.?\":{}|<>]).{8,20}$"
//     }