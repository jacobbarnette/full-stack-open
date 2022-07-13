const Header = ({course, id}) => {
  course.forEach(element => {
    
  });
  return(
    <h1>{course[id].name}</h1>
  )
}
export default Header