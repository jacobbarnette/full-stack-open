
import Country from './Country'
const CountryList = ({countries, index, clicked, setClicked}) => {
  console.log(countries[index].clicked)
  
  const handleClick = () => {
    
    if(!clicked){
      console.log(countries[index].clicked, index)
      console.log(index)
    }
      setClicked(!countries[index].clicked)
      
    }
  
    if(countries[index].clicked){
      return( <Country countries={countries} index={index} />)
    }else if(!countries[index].clicked) {
    return(
      <div>
           <p><li>{countries[index].name.common}</li><input value='show' onClick={handleClick} type='submit'/></p> 
      </div>
    )
  } 
    
  }

export default CountryList