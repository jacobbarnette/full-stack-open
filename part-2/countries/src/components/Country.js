const Country = ({countries}) => {
  console.log('lol',countries)
  return(
   <div>
   <h2>{countries[0].name.common}</h2>
   <p>Capital: {countries[0].capital[0]}</p>
   <p>Area: {countries[0].area}</p>
   <img src={countries[0].flags.png}></img>
   <h3>Languages </h3>
    <ul>
      <li>{countries[0].languages.swe}</li>
    </ul>
   </div>
  )
}

export default Country 