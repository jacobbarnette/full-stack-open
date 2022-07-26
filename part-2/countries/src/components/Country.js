const Country = ({countries, index}) => {
  if(countries[index].name.common = undefined){
    console.log('error')
  }
  return(
  <div>
  <h2>{countries[index].name.common}</h2>
  <p>Capital: {countries[index].capital[index]}</p>
  <p>Area: {countries[index].area}</p>
  <img src={countries[index].flags.png}></img>
  <h3>Languages </h3>
   <ul>
     <li>{countries[index].languages.swe}</li>
   </ul>
   <input type='submit'/>
  </div>
 )
  }

export default Country