const { response } = require("express");
const express = require("express");
const app = express();
const port = 3001;

let persons = [
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

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/persons", (req, res) => {
  res.json(persons);

  console.log(req);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);
  res.send(person);
});
app.get("/info", (req, res) => {
  const phoneBook = persons.length;

  res.send(`<p>Phonebook has ${phoneBook} entries</p><p>${date}</p>`);
});

app.listen(port);
