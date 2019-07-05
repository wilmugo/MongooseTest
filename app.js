const mongoose = require('mongoose');

//conectar mongoose con la base de datos fruitsDB
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

//schemas 
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

//creando collections con mongoose
const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

//insertando datos a las collections
const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

const person = new Person ({
  name: "Wilfredo",
  age: 36
});

//fruit.save();
//person.save();

const orange = new Fruit ({
  name: "Orange",
  rating: 7,
  review: "Amazing"
});
const banana = new Fruit ({
  name: "Banana",
  rating: 8,
  review: "is  a yellow fruit"
});
const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 5,
  review: "i dont know kiwi"
});

// insert many item in a db
//Fruit.insertMany([kiwi, orange, banana], (err) => {

//  if(err){
//    console.log(err);
//  } else {
//    console.log("Succesfuly saved all the fruits to fruitsDB");
//  }

//});

// find in a db

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    //console.log(fruits);
    fruits.forEach( item => console.log(item.name) );
  }
});


