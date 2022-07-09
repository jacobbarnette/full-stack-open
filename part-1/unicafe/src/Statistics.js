import StatLine from './StatLine'

const Statistics = ({good, neutral, bad, total}) => {
  if(total === 10) {
    return(
      <div>
        You need to leave a review, before you can view the data
      </div>
    )
  } else if (total != 10)
  return(
    <div>
      <table>
      <tr><StatLine text='Good' value={good}  /></tr>  
      <tr><StatLine text='Neutral'value={neutral}  /> </tr>
       <tr><StatLine text='Bad'value={bad}  /></tr>
        <tr><StatLine text='Total Reviews: 'value={total}  /></tr>
        <tr><StatLine text='Average'value={good - bad / total}  /></tr>
        <tr><StatLine text='Good Reviews:'value={good / total}  /></tr>
        </table>
    </div>
  )
}

export default Statistics  