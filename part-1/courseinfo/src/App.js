const course = 'Half Stack Application Development'
const part1 = 'Fundamentals of React'
const exercise1 = 10
const part2 = 'Using props to pass data'
const exercise2 = 7
const part3 = 'State of a component'
const exercise3 = 14

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return(
    <div>
      <Part course={part1} exercise={exercise1} />
      <Part course={part2} exercise={exercise2}/>
      <Part course={part3} exercise={exercise3} />
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.course} {props.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Total Number of exercises {exercise1 + exercise2 + exercise3}</p>
    </div>
  )
}
const App = () => {
 

  return(
    <div>
      <Header cousre={course}/>
      <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3} />
     <Total />
    </div>
  )
}

export default App