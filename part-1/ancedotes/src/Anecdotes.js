const Anecdotes = ({anecdotes, selected}) => {
  return(
    <div>
      <p>{anecdotes[selected]}</p>
    </div>
  )
}

export default Anecdotes