import { useState, useEffect} from 'react'
import axios from 'axios'
import CountryData from './components/CountryData'

const App = () => {
  const [ countryText, setCountryText] = useState('')
  const [ countries, setCountries] = useState([])
  const [ filteredData, setFilteredData ] = useState([])
  const [clicked, setClicked ] = useState(false)

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all/`)
         .then(res => {
           setCountries(res.data)
          })
  }, [])
  countries.map(country => country.clicked = clicked)
  const filterData = (e) => { 
    //let text = e.target.value
    setCountryText(e.target.value)
    setFilteredData(countries.filter(country=> (country.name.common.toLowerCase().includes(countryText.toLowerCase())))
    )}
   
  return(
    <>
    find countries <input value={countryText} onChange={filterData}/>
    <CountryData clicked={clicked} setClicked={setClicked}countries={filteredData}/>
    </>
  )
}

export default App;
