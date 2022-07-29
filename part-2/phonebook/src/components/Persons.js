import axios from 'axios'
const Persons = ({person}) => {
  const baseUrl = 'http://localhost:3001/persons'
  const deleteNumber = () => {
    axios
      .delete(`${baseUrl}/${person.id}`)
      window.confirm('are you sure')
   }
    return(
      <div>
         <li id={person.id}>{person.name} {person.number}</li>
         <input type='submit' onClick={deleteNumber}/>
      </div>
    )
  
}

export default Persons