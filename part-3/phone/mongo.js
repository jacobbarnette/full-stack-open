const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://jbarnette:${password}@cluster0.gi3jype.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url).then(console.log("connected"));

const phoneScehma = new mongoose.Schema({
  name: String,
  number: String,
});
const Phone = mongoose.model("Phone", phoneScehma);

if (process.argv.length === 3) {
  Phone.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
  });
}

if (process.argv.length > 3) {
  const name = process.argv[3];
  const number = process.argv[4];

  const phone = new Phone({
    name: name,
    number: number,
  });

  person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`);
    mongoose.connection.close();
  });
}

//mongodb+srv://jbarnette:<password>@cluster0.gi3jype.mongodb.net/?retryWrites=true&w=majority
