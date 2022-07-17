const Persons = ({renderedPeople}) => {
  console.log(renderedPeople)
  renderedPeople.map(person => {
  return  <li key={person.number}>lol</li>
  })
}

export default Persons