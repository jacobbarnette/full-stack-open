const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide password as an argument node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://jbarnette:${password}@cluster0.gi3jype.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url).then((result) => {
  console.log("connected");
});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log("phonebook");
    result.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
}

if (process.argv.length > 3) {
  const name = process.argv[3];
  const number = process.argv[4];

  const person = new Person({
    name: name,
    number: number,
  });
  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
}
