db.students.aggregate([
    {
        $project: {
            fullName: { $concat: ["$name", " ", "$surname"]},
        }
    }
])



db.orders.aggregate([{$unwind:{
    
    "$products",
    preservedNullAndEmptyArrays:true},  
])



// $group
//group is used to group table
//group with operator

db.teachers.aggregate([{
    $group: {
        _id: "$gender",
        names: { $push: "$name" },
        data: { $push: "$$ROOT"},
        totalNoOfData:{$sum:1},
        maxAge: {$max: "age"},
        minAge: {$min: "age"},
        avgAge: {$avg: "age"},
        totalAge: {$sum: "age"}
    }
}])