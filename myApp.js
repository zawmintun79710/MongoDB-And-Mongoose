require('dotenv').config();
let mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name:"ZawMinTun",age:27,favoriteFoods:["Pizza","Beef Burger"]
  });
  person.save((err, data)=>{
     done(null, data)
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data)=>{
  done(err, data)
  })
}

const findPeopleByName = (personName, done) => {
  Person.find({name:personName}, (err, data)=>{
  done(err, data)
  })
}

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, data)=>{
    done(err, data)
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data)=>{
    done(err, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, data)=>{
    data.favoriteFoods.push(foodToAdd);
    data.save((err, newData)=>{
      done(err, newData);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  })
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;