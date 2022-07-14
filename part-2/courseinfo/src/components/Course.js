import Header from './Header'
import Part from './Part'
import Total from './Total'

const Content = ({course}) => {
  let reactContent = [];
  console.log(course)
  let nodeContent = []
  Object.keys(course).map(x => {
    if(x != 1){
      course[x].parts.map(item => {
        reactContent.push(<Part key={item.id}course={item.name} exercise={item.exercises} />)
      })
    }else if (x != 0){
      course[x].parts.map(item =>
      nodeContent.push(<Part key={item.id}course={item.name} exercise={item.exercises} />)
   )
   }
  })

  return(
    <div>
      <Header id={0}course={course} />
      {reactContent}
      <Header id={1} course={course} />
      {nodeContent}
      <Total course={course} />
    </div>
  )
}
export default Content