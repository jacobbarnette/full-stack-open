import { useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

let testCondition = true
const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
          .then(response => {setPersons(response.data)})
  }, [])
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