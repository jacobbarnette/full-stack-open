const PersonForm = ({handleSubmit, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return(
    <form onSubmit={handleSubmit}>
    <div>
      name: <input value={newName} placeholder={'enter name'} onChange={handleNameChange}/>
      number: <input value={newNumber} placeholder={'enter number'} onChange={handleNumberChange} />
      <button type='submit'>add</button>
    </div>
  </form>
  )
 
}

export default PersonForm