 //mongosh
//use sample --->Switched to db sample
//show dbs---->
//db.dropDatabase()
//db.createCollection('user')
//show collections
//db.user.insertOne({Name:"Anamika",Place:"Malappuram",Age:20})
//db.user.insertMany([{},{}])
//db.user.find()
//db.user.find().limit(2)--->(Only first two result will show)
//db.user.find().sort({name:1}).limit(2)--->(The first sorted 2 names)
//db.user.find().sort({name:-1}).limit(2)--->(The last sorted 2 names)
//db.user.find().sort({age:1,name:-1}).limit(2)--->(The age in ascending order that means data without age show first)
//db.user.find().skip(1).limit(2)---->(They show the last two but skip the last one)
//db.user.find({age:"26"})--->(Nothing will show because in data age is number)
//db.users.find({name:"Kyle"},{name:1,age:1})---->(Only the name and age in the data will show)
//db.users.find({name:"Kyle"},{name:1,age:1,_id:0})----->(the id won't show)
//db.users.find({name:"Kyle"},{age:0})---->(the data about kyle will show but without the age)
//db.users.find({name:{$eq:"Kyle"}})------>(Show the data which is equal to the name kyle)
//db.users.find({name:{$ne:"Kyle"}})----->(show the data which is not equal to the name kyle)
//db.users.find({age:{$gt:19}})---->(The data which have the age greater than 19 .don't show the data without age)
//db.users.find({age:{$lt:28}})------>(the data which have the age less than 28)
//db.users.find({name:{$in:["Kyle","Sally"]}})----->(Show the data if those name are in the data)
//db.users.find({name:{$nin:["Kyle"]}})----->(Show the data if that  name not in the list)
//db.users.find({age:{$exists:true}})------->(Shows the only objects which have the age.Also show the object with age:null )
//db.users.find({age:{$exists:false}})----->(Show the objects which does not exist the age )
//db.users.find({age:{$gte:20,$lte:40}})----->(Show the objects which have the age in between 20 and 40)
//db.users.find({age:{$gte:20,$lte:40},name:"Kyle"})--->(Show the objects which have the age in between 20 and 40 and with the name Kyle)
//db.users.find({$and:[{age:26},{name:"Kyle"}]})----->(It show the object if only the name is Kyle and age is 26)
//db.users.find({$or:[{age:20},{name:"Kyle"}]})------->(It show the object which have either name Kyle or the age 20)
//db.users.find({age:{$not:{$lte:20}}})----->(It show all the objects with age not less than 20 that means greater than 20 with age:null)
//db.users.insertMany([{name:"Tom",balance:100,debt:200},{name:"Kristin",balance:20,debt:0}])
//db.users.find({$expr:{$gt:["$debt","$balance"]}})---->(Show the object which have debt greater than balance)
//db.users.find({"address.street":"123 Main St"})----->(It is used to find  the nested object)
//db.users.findOne({age:{$lte:40}})------>(It show the first object which have age less than 40)
//db.users.countDocuments({age:{$lt:40}})---->(It give the number of objects that less than 40)
//db.users.updateOne({age:26},{$set:{age:27}})------>(It updates the age from 26 to 27 of the object)
//db.users.updateOne({_id: ObjectId('659f5c8ac6801899e8e01985')},{$set:{name:"New Name"}})------->(Updating using object id)
//db.users.updateOne({_id: ObjectId('659f5c8ac6801899e8e01985')},{$inc:{age:3}})------->(The age incremented by 3)
//db.users.updateOne({_id: ObjectId('659f5c8ac6801899e8e01985')},{$rename:{name:"Firstname"}})------->(Changes the name property into firstname)
//db.users.updateOne({_id: ObjectId('659f5c8ac6801899e8e01985')},{$unset:{age:""}})----->(delete the property age)
//db.users.updateOne({_id: ObjectId('659f5c8ac6801899e8e01985')},{$push:{hobbies:"Swimming"}})------->(push element into array in the object)
//db.users.updateOne({_id: ObjectId('659f5c8ac6801899e8e01985')},{$pull:{hobbies:"Bowling"}})------>(Take out element from an array)
//db.users.updateMany({address:{$exists:true}},{$unset:{address:""}})------>(find the objects with address and remove the address from that)
//db.users.replaceOne({age:41},{name:"John",age:30,place:"New York"})------>(It replace the entire content of the object with age 41 to the new details on the second curly bracket)
//db.users.deleteOne({name:"John"})----->(deletes that one user)
//db.users.deleteMany({age:{$exists:true}})
//db.users.insertOne({name:"Mark",isAdmin:true,dob:new Date(),createdOn:new Timestamp()})----->(The date give the date and the timestamp give the seconds)
//db.stats()---->(returns a document with statistics about the database system's state. A complete listing, including freeStorage details)
//db.users.find().toArray()---->(show all the documents instead of showing as curosor)
//db.users.find().foreach
//db.users.find({ name: { $type: "string" } });----->(Type operator use to specify the type of the value)
//db.users.find({ scores: { $elemMatch: { type: "exam", score: { $gt: 90 } } } });
//db.users.aggregate([{$match:{isActive:true}}])----->It makes the document with matches with isActive:true.
//db.users.aggregate([{$match:{tags:{$size:3}}}])----->(It give the document with tags array having 3 elements)
//db.users.aggregate([{$group:{_id:"$age"}}])----->(_id is Mandatory field.it give the document with distinct values of age of the input document.)
//db.users.aggregate([{$group:{_id:"$company.location"}}])(For nested documents use dot notation)
//db.users.aggregate([{$group:{_id:{age:"$age",gender:"$gender"}}}])------>(It give the document with value and along with its  key)
//db.users.aggregate([{$match:{gender:"female"}},{$group:{_id:{eyeColor:"$eyeColor",age:"$age",gender:"$gender"}}}])------>(It give the document with eyeColor,age and gender of all the females of the input document)
//db.users.aggregate([{$group:{_id:{age:"$age",eyecolor:"$eyecolor"}}},$match:{gender:"female"}])----->(It give empty document because the order of the stage is wrong)
//db.users.aggregate([{$group:{_id:{age:"$age",eyecolor:"$eyecolor"}}},{$match:{"_id.age":{$gt:30}}}])----->(It give the document with age and eyecolor which matching to age greater than 30)
//db.users.find({ename:{$regex:/^s/i}})----->(it give the name starting with s and i is used for removing case sensitive)
//db.users.find({ename:{$regex:/s$/i}})------>(It give the name ending with s )
//db.users.aggregate([{$count:"allDocumentsCount"}])------->(It give the count of the documents with the string passed,({"allDocumentCount":100}) 0.24 seconds to count 1000 documents)
//db.users.aggregate([]).toArray().length---->(client side method 1.74 seconds to count 1000 documents)
//db.users.aggregate([]).itcount()----->(client side method  1.24 seconds to count 1000 documents)
//db.users.aggregate([{$group:{_id:"$company.location.country"}},{$count:"countriesCount"}])----->(It give the count of documents which is grouped)
//db.users.aggregate([{$sort:{name:1}}])
//db.users.aggregate([{$project:{name:1,newAge:"$age"}}])
//db.users.aggregate([{$unwind:"$tags"},{$project:{name:1,gender:1,tags:1}}])----->(all array elements in the document get separated and documents with same details and differenct array elements in each one)
//db.users.aggregate([{$unwind:"$tags"},{$group:{_id:"$tags"}}])----->(documents grouped by certain elements of the array)
//db.users.aggregate([{$group:{_id:"favoriteFruit",count:{$sum:1}}}])
//db.users.aggregate([{$unwind:"$tags"},{$group:{_id:"$tags",count:{$sum:1}}}])
//db.users.aggregate([{$group:{_id:"$favoriteFruit",avgAge:{$avg:"$age"}}}])
//db.users.aggregate([{$project:{name:1,eyecolor:{$type:"$eyeColor"},ageType:{$type:"$age"}}}])
//db.users.aggregate([{$group:{_id:{age:"$age",eyecolor:"$eyecolor"}}},{$out:"aggregationResults"}])
//db.users.aggregate([],{allowDiskUse:true})----->(All aggregation stages can use maximum 100 Mb of RAM ,Server will return error if RAM limit is exceeded ,allowDiskUse:true will enable MongoDB to write stages data to the temporal files)
//db.users.aggregate([{$group:{_id:{age:"$age",eyeColor:"$eyeColor"}}},{$out:"aggregationResults"}])----->(It add the aggregation results into another output collections)
//db.persons.getIndexes()---->(to see the indexes)


//WHAT IS DATABASE

//*A database is an organized collection of structured information or data stored electronically in a computer system.
// *It's designed to efficiently manage, store, retrieve, and manipulate data. Databases play a crucial role in various applications and industries by providing a structured way to store and access information.

//SQL VS NO SQL

//SQL Databases:

// Structure: SQL databases are relational databases that use a structured schema, with data organized into tables with predefined columns and data types. They enforce ACID (Atomicity, Consistency, Isolation, Durability) properties.

// Language: SQL is the standard language for interacting with these databases. It's used for querying, inserting, updating, and deleting data using commands like SELECT, INSERT, UPDATE, and DELETE.

// Scalability: Traditional SQL databases can be less horizontally scalable compared to NoSQL databases. Scaling often involves vertical scaling (adding more resources to a single server) rather than horizontal scaling (distributing data across multiple servers).

// Examples: MySQL, PostgreSQL, Oracle, Microsoft SQL Server are some well-known SQL databases.

// NoSQL Databases:

// Flexibility: NoSQL databases offer flexibility in handling unstructured, semi-structured, or rapidly changing data. They often use dynamic schemas or schemaless approaches, allowing for more fluid data models.

// Types: NoSQL databases come in various types:

// Document Stores (like MongoDB): Store data in flexible, JSON-like documents.
// Key-Value Stores (like Redis): Store data in key-value pairs.
// Column Stores (like Cassandra): Organize data by columns rather than rows.
// Graph Databases (like Neo4j): Optimize for data with complex relationships.
// Scalability: NoSQL databases are designed for horizontal scalability, allowing for easier distribution of data across multiple servers, making them more suitable for handling large amounts of data and high transaction rates.

// Examples: MongoDB, Cassandra, Redis, Couchbase are some examples of popular NoSQL databases.

//WHAT IS MONGODB

//It is a document database designed for ease of development for ease of development and scaling.
//

//DOCUMENT DATABASE

//A record in MongoDB is a document, which is a data structure composed of field and value pairs.
//*MongoDB documents are similar to JSON objects(BSON).
//*The values of fields may include other documents,arrays,and arrays of document.



//lookup, unwind, capped collection,runtime capped collection