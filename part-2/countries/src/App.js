import { useState, useEffect} from 'react'
import axios from 'axios'
import CountryData from './components/CountryData'
import Country from './components/Country'
const App = () => {
  const [ countryText, setCountryText] = useState('')
  const [ countries, setCountries] = useState([])
  const [ filteredData, setFilteredData ] = useState([])

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all/`)
         .then(res => {
           setCountries(res.data)
          })
  }, [])


  const filterData = (e) => {
    setCountryText(e.target.value)
    setFilteredData(countries.filter(country => (country.name.common.toLowerCase().includes(countryText.toLowerCase())))
    )}
  
 
  return(
    <>
    find countries <input value={countryText} onChange={filterData}/>
    <CountryData countries={filteredData} />
    </>
  )
}

export default App;
