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

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  person = persons.filter((person) => person.id === id);

  response.status(204).end();
});

const generateID = () => {
  return Math.floor(Math.random() * 1000);
};
app.post("/api/persons", (req, res) => {
  const body = req.body;
  if(!body.name || !body.number) {
    return response.status(404).json({
      error: 'the name or number is missing'
    })
  }

  const exisitngPerson = persons.find(person => person.name === body.name)
  if(exisitngPerson){
    return response.status(404).json({
      error: 'name must be unique'
  })
  const person = {
    id: generateID(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(person);
  response.json(person);
});

app.listen(port);
