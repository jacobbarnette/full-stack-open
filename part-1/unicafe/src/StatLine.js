const StatLine = ({text, value}) => {
  console.log(text, value)
  return(<td>
     <p>{text}: {value}</p>
  </td>
   
  )
}

export default StatLine