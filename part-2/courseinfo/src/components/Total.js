const Total = ({course}) => {
  let total = 0;
  course.map(course => {
    total += course.exercises
  })
  return(
    <div>
      <p>Total Number of exercises {total}</p>
    </div>
  )
}
export default Total