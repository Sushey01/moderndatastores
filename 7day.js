
/*

db.students.updateMany({}, {$pull:{experience:{company:"A"}}})



// DELETE

db.students.deleteOne({name:"ram"}) // delete document where name is ram
db.students.deleteMany({})


json vs bson // bson can handle moreover datatype 

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          description: "name must be a string"
        },
        age: {
          bsonType: "int",
          description: "age must be an integer"
        },
        isMarried: {
          bsonType: "bool",
          description: "isMarried must be a boolean"
        }
      }
      // Note: additionalProperties is removed, so extra fields are allowed
    }
  }
});


db.runCommand({
  collMod: "users", //collMode = collection modifier
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          description: "name should be string", //description field is  used so for comment purpose only, it  will not shown in error message
       
        },
      },
    },
  },
});



db.users.insertOne({name:"ram", age:20, isMarried:false}) // insert document in users collection
db.users.insertMany([{name:"shyam", age:30, isMarried:true}, {name:"gita", age:25, isMarried:false}]) // insert multiple documents in users collection



*/


// Creating a collection with schema validation and disallowing additional properties
db.createCollection("users", {
  validator: {
      $jsonSchema: {
          bsonType: "object",
          additionalProperties: false , // 
      required: ["name", "age"],
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          description: "name must be a string"
        },
        age: {
          bsonType: "int",
          description: "age must be an integer"
        },
        isMarried: { // Moved inside properties
          bsonType: "bool",
          description: "isMarried must be a boolean"
        }
      },
    }
  }
});


// Renaming a collection


db.runCommand({
  collMod: "users", //collMode = collection modifier
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          description: "name should be string", //description field is  used so for comment purpose only, it  will not shown in error message
          minLength:3,
          maxLength: 20,
       
        },
      },
    },
  },
});