import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personservice from "./components/services/personservice";
const baseUrl = "http://localhost:3001/api/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //containsObject()
    if (newName === "" || newNumber === "") {
      alert("Please fill in the required information");
    }

    const existing = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (existing && existing.number === newNumber) {
      alert(`${newName} is already added`);
      setNewName("");
      setNewNumber("");
    } else if (existing && existing.number != newNumber) {
      if (
        window.confirm(
          `${existing.name} is in the phonebook, would you like to change the number`
        )
      ) {
        const updatedPerson = { ...existing, number: newNumber };
        const id = existing.id;

        axios.put(id, updatedPerson).then((response) => {
          console.log(response);
          setPersons(
            persons.map((person) => (person.id !== id ? person : response))
          );
        });
        return;
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      axios.post(`${baseUrl}/persons`, personObject);
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }

    /*const personObject = {
      name: newName,
      number: newNumber
    }
    persons.map(person => {
      if(person.name === newName && person.number === newNumber) {
        alert(`${newName} is already added to phonebook`)
        return
      } else if (person.name != newName && person.number != newNumber) {
        axios
        .post('http://localhost:3001/persons', personObject)
            
      }
    })*/
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterText = (e) => {
    setFilterText(e.target.value);
  };

  const renderedPeople =
    filterText === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filterText.toLowerCase())
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handleFilterText={handleFilterText} />
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      {renderedPeople.map((person) => {
        return (
          <div>
            <Persons person={person} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
