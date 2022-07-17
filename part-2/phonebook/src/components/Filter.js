const Filter = ({filterText, handleFilterText}) => {
  return(
  <>
      Filter shown with: <input value={filterText} onChange={handleFilterText}/>
  </>
  )
}

export default Filter