const CountryList = ({countries, index}) => {
  console.log(countries[index].name.common)
  return(
    <div>
         <p><li>{countries[index].name.common}</li><input value='show' type='submit'/></p> 
    </div>
  )
}

export default CountryList