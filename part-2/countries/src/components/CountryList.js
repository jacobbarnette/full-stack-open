
import Country from './Country'
const CountryList = ({countries, index, clicked, setClicked}) => {
  console.log(setClicked)
  
  const handleClick = () => {
    if(!clicked){
      console.log('hew')
    }
      setClicked(!clicked)
      
    }
  
    if(clicked){
      return( <Country countries={countries} index={index} />)
    }else if(!clicked) {
    return(
      <div>
           <p><li>{countries[index].name.common}</li><input value='show' onClick={handleClick} type='submit'/></p> 
      </div>
    )
  } 
    
  }

export default CountryList