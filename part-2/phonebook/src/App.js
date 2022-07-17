import { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
let testCondition = true
const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-234-9812'
    },
    {
      name: 'Tyrion Fordrgon',
      number: '040-233-9812'
    },
    {
      name: 'Jaina Proudmore',
      number: '040-334-9812'
    },
    {
      name: 'Arthas Menethil',
      number: '040-254-9812'
    },
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  const handleSubmit = (e) => {
    containsObject()
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if(testCondition){
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  
  function containsObject(){
    persons.map(person => {
      if(person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        testCondition = false
        setNewName('')
        setNewNumber('')
      } 
    })
  }
  function handleFilterText(e){
    setFilterText(e.target.value)
  }
  
  const renderedPeople = filterText === ''
    ? persons
    : persons.filter(person => 
      person.name.toLowerCase().includes(filterText.toLowerCase()))

      
  return(
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handleFilterText={handleFilterText}/>
      <PersonForm handleSubmit={handleSubmit} newName={newName}  handleNumberChange={handleNumberChange} newNumber={newNumber} />
      <h2>Numbers</h2>
      {renderedPeople.map(person => {
        
        return(
          
          <p key={person.number}>{person.name} {person.number}</p>
        )})}
      <Persons renderedPeople={renderedPeople}/>
    </div>
  )
}

export default App