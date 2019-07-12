const mongoose = require('mongoose');

//conectar mongoose con la base de datos fruitsDB
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

//schemas 
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  }, 
  review: String
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

//creando collections con mongoose
const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

//insertando datos a las collections
const fruit = new Fruit ({
  name: "Tomato",
  rating: 4,
  review: "Pretty solid as a fruit."
});

const mango = new Fruit({
  name: "Mango",
  rating: 9,
  review: "The best fruit ever."
})

mango.save()

// const person = new Person ({
//   name: "Amanda",
//   age: 10,
//   favoriteFruit: pineaple
// });

//fruit.save();
// person.save();

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

Person.updateOne({ name: "Wilfredo" }, { favoriteFruit: mango }, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Update people document added favorite fruit to Wilfredo')
  }
})


// Fruit.deleteOne({ name: 'Tomato'}, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Delete sucefully')
//   }
// })

// Person.deleteMany({ name: 'Wilfredo' }, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Succesfully delete all documents with name Wilfredo')
//   }
// })