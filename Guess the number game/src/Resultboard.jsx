import React from 'react'
import App from './App'
function Resultboard(data) {
  return (
    <>
     <div className="col-6 ms-5">
            <div className="card">
              <div className="card-header">
                <h3>Player score board</h3>
              </div>
              <div className="card-body">
                <table>
                  <tbody>
                    <tr>
                      <td><h4>Player name</h4></td>
                      <td><h4>{data.nameSubmitted ? `: ${data.name}` : ": "}</h4></td>
                    </tr>
                    <tr>
                      <td><h4>Remaining chances</h4></td>
                      <td><h4>: {data.count}</h4></td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        {/* <Result secretnumber={data.number} term={data.term} /> */}
                        <h5>{data.guessResult && <p>{data.guessResult}</p>}</h5>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </>
  )
}

export default Resultboard