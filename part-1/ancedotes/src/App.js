import { useState } from 'react'
import Button from './Button'
import Anecdotes from './Anecdotes'
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)  )

  const getRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVoteCount = () => {
    const copy = {...votes}
    copy[selected]++
    setVotes(copy)
  }
  const findMax = () => {
    let max = -1; 
    let maxKey =-1;

    for(let key in votes){
      if(votes[key] > max){
        maxKey = key
        max = votes[key]
      }
    }
    return maxKey
  }
  
  return(
    <div>
      <Anecdotes anecdotes={anecdotes} selected={selected} votes={votes}/>
      <p>This has received a total of votes: {votes[selected]}</p>
      <Button onClick={getRandomAnecdote}text='Get a random anecdote'></Button>
      <Button onClick={addVoteCount}text='Add Vote'></Button>
      <h2>Anecdotes with the most votes</h2>
     {anecdotes[findMax()]}
    </div>
  )
}

export default App;
