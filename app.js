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
  
});

//fruit.save();
//person.save();
