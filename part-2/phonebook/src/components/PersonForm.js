const PersonForm = ({handleSubmit, newName, handleNameChange, newNumber, handleNumberChange}) => {
  <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          number: <input value={newNumber} onChange={handleNumberChange} />
          <button type='submit'>add</button>
        </div>
      </form>
}

export default PersonForm