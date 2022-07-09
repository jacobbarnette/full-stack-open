import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  const [good, setGood] = useState(6)
  const [neutral, setNeutral ] = useState(3)
  const [bad, setBad] = useState(1)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)
  const total = (good + bad + neutral)

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
        <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
      </div>
    </div>
  )
}

export default App