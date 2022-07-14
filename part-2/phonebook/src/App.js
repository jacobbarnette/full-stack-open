import { useState } from 'react'
let testCondition = true
const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-234-9812'
    }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      } 
    })
  }
  
  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          number: <input value={newNumber} onChange={handleNumberChange} />
    
        
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
       {persons.map(person => {
         
         return(
           <p key={person.number}>{person.name} {person.number}</p>
         )
       })}
    </div>
  )
}

export default App