import { render } from "@testing-library/react";
import Country from "./Country";
import CountryList from "./CountryList";

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
     
      renderedData = countries.map((country, index) => {
       return <CountryList index={index}countries={countries}/>
       
      }) 
    } return renderedData
    
  }


export default CountryData