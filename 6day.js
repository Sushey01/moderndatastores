/*

db.students.updateMany({name:"ram"}, {$set:{country:"nepal"}}) // add field and update in all documents where name is ram
db.students.updateMany({}, {$inc:{age:10}}) // increment age by 10 for all documents
db.students.updateMany({},{$inc:{age:-10}}) // decrement age by 10 for all documents
db.students.updateMany({}, {$mul:{age:10}}) // multiply age by 10 for all documents
db.students.updateMany({}, {$mul:{age:1/10}}) // multiply age by 1/10 for all documents



#renaming field
db.students.updateMany({}, {$rename:{course:"subject"}}) // rename field course to subject for all documents


#removing field
db.students.updateMany({}, {$unset:{country:"", age:""}}) // remove field country for all documents


#upsert
db.students.updateMany(filter, data, upsert)
db.students.updateMany({name:"ram"}, {$set:{country:"nepal"}}, {upsert:true}) // if document with name ram is not found then it will create a new document with name ram and country nepal
db.students.updateMany({name:"ram"}, {$set:{country:"nepal"}}, {upsert:false}) // if document with name ram is not found then it will not create a new document with name ram and country nepal
db.students.updateMany({name:"roshan"}, {$set:{role:"ai engineer"}}, {upsert:true}) // if document with name roshan is not found then it will create a new document with name roshan and role ai engineer
db.students.updateMany({name:"roshan"}, {$set:{role:"ai engineer"}}) // if document with name roshan is not found then it will not create a new document with name roshan and role ai engineer because upsert is false by default


#update array
db.students.updateMany({}, {$push:{hobbies:"react"}}) // add react to hobbies array for all documents
db.students.updateMany({name:"ram"}, {$addToSet:{skills:"css"}}) // add css to skills array for document where name is ram but if css is already present in skills array then it will not add it again
db.students.updateMany({name:"ram"}, {$addToSet:{skills:"python"}}) // add python to skills array for document where name is ram but if python is already present in skills array then it will not add it again


db.students.updateMany({name:"gita"}, {$pop:{skills:1}}) // remove last element from skills array for document where name is gita
db.students.updateMany({name:"gita"}, {$pop:{skills:-1}}) // remove first element from skills array for document where name is gita 

db.students.updateMany({name:"sita"}, {$pull:{skills:"python"}}) // remove python from skills array for document where name is sita

db.students.updateMany({name:"sita"}, {$pullAll:{skills:["python", "java"]}}) // remove python and java from skills array for document where name is sita

syntax
db.students.updateMany(filter, data, ....)

updateOne
db.students.updateOne({name:"ram"}, {$set:{country:"nepal"}})
*/