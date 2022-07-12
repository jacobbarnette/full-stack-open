import Header from './Header'
import Part from './Part'
import Total from './Total'

const Content = ({course}) => {
 const results = course.parts.map(item => {
  return(<Part key={item.id}course={item.name} exercise={item.exercises} />)
 })

  return(
    <div>
      <Header course={course} />
      {results}
      <Total course={course.parts} />
    </div>
  )
}
export default Content