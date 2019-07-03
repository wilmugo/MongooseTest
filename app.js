const mongoose = require('mongoose');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

    // Insert multiple documents
    // db.collection('fruits').insertMany([{name: "Apple", score: 9, review: "Great fruit"}, {name: "Orange", score: 6, review: "Kinda sour"}, {name: "Banana", score: 9, review: "Amazing flavor"}], function(err, r) {
    //   assert.equal(null, err);
    //   assert.equal(3, r.insertedCount);
    //   console.log(`Inserted ${r.insertedCount} documents into the collection`);
    //   // client.close();
    //   callback(r);
    // });

    const col = db.collection('fruits');
    // Get first two documents that match the query
    col.find({}).toArray(function(err, fruits) {
      assert.equal(null, err);
      console.log(fruits);
      client.close();
    });
});
