import { render } from "@testing-library/react";
import Country from "./Country";

const CountryData = ({countries}) => {
  let renderedData;
  if(countries.length === 0) {
    return null;
  } else if (countries.length === 1){
   return(
     <Country countries={countries} />
   )
  }
  else if (countries.length > 10){
    return(
      <div>
        <p>Sorry, too many damn KOUNTRIES</p>
      </div>
    ) 
  } else if (countries.length > 1 || countries.length <= 10){
     
      renderedData = countries.map(country => {
        return(
          <h2>{country.name.common}</h2>
        )
       
      }) 
    } return renderedData
    
  }


export default CountryData