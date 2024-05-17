import React from 'react'

function Result({secretnumber,term}) {
    let result="";
    if(term>secretnumber)
        {
            result="Higher";
        }
        else if(term<secretnumber)
            {
                result="Lower"
            }
        else if(term==secretnumber)
            {
                result="Wow!.. Correct.."
                // alert("congradulation you won the game...")
            }
        else
        {
            result="Enter value from 1 to 10 only"
        }
  return (
    <>
    {/* {term!="" && <h4>You Guessed : {result}</h4>} */}
    <td><h4>You Guessed</h4></td>
    <td><h4>: {term && result} </h4></td>
    
    </>
  )
}

export default Result