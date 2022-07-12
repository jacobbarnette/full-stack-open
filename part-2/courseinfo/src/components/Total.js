const Total = ({course}) => {
  let  newArr = [];
  let initialValue = 0;
  course.map(course => {
    newArr.push(course.exercises)
  })
  let newValue = newArr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue
  );
  return(
    <div>
      <p>Total Number of exercises {newValue}</p>
    </div>
  )
}
export default Total