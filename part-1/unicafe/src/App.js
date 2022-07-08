import { useState }from 'react'
import Button from './Button'

const App = () => {
  const [good, setGood] = useState(6)
  const [neutral, setNeutral ] = useState(10)
  const [bad, setBad] = useState(2)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return(
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button onClick={addGood} text='good'/>
        <Button onClick={addNeutral} text='neutral'/>
        <Button onClick={addBad} text='bad'/>
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    </div>
  )
}

export default App