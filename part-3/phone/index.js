require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const Phone = require("./models/phonebook");
const { response } = require("express");
app.use(cors());
app.use(express.static("build"));

/*const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
*/
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/persons", (request, response) => {
  Phone.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/info", (req, res) => {
  const date = new Date();
  res.send(`<p>Phonebook has info for ${persons.length} people</p>`);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
