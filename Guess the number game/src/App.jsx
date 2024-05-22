import React, { useState } from 'react';
import Header from './Header';
import Result from './Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [data, setData] = useState({ number: null, term: "", name: "", count: 2, nameSubmitted: false, guessResult: null });

  const generateNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1;
    setData(prevData => ({ ...prevData, number: number }));
    alert("secrete number is generated")
    console.log(number);
  };

  // const handleNameChange = (e) => {
  //   setData(prevData => ({ ...prevData, name: e.target.value }));
  // };

  const handleSubmitName = (e) => {
    e.preventDefault();
    let name=document.getElementById("name").value.trim();
    setData(prevData => ({ ...prevData, nameSubmitted: true ,name:name}));
  };

  const handleChange = (e) => {
    setData(prevData => ({ ...prevData, term: e.target.value }));
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const guess = parseInt(data.term, 10);
    if (isNaN(guess) || guess < 1 || guess > 10) {
      setData(prevData => ({ ...prevData, guessResult: 'Invalid input. Please enter a number between 1 and 10.' }));
      return;
    }

    const newCount = data.count - 1;
    let guessResult;
    if (guess === data.number) {

      guessResult = 'Congratulations! You guessed the correct number!';
      setTimeout(()=>{setData({ number: null, term: "", name: "", count: 2, nameSubmitted: false, guessResult: null });
    
      document.getElementById("name").value="";
      document.getElementById("term").value="";
    },4000)
    } else if (newCount <= 0) {
      guessResult = 'Sorry, you are out of chances. The correct number was ' + data.number;
      setTimeout(()=>{setData({ number: null, term: "", name: "", count: 2, nameSubmitted: false, guessResult: null });
    
      document.getElementById("name").value="";
      document.getElementById("term").value="";
    },4000)
    } else {
      guessResult = 'Try again!';
    }

    setData(prevData => ({
      ...prevData,
      count: newCount > 0 ? newCount : 0,
      guessResult: guessResult
    }));
  };

  return (
    <>
      <Header />
      <section>
        <div className="row mt-4">
          <div className="col-5 ms-5">
            <div className="card">
              <div className="card-header bg-primary">
                <h3>Generate the Secret number</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmitName} className='d-flex'>
                  <input
                    type="text"
                    placeholder='Enter your name...'
                    className='form-control me-2' id='name'
                    
                  />
                  <button className="btn btn-outline-success " type="submit">Save</button>
                </form>
                {/* {data.nameSubmitted && <h3>Player name: {data.name}</h3>} */}
                {/* <h3>Secret number: {data.number}</h3> */}
                <button onClick={generateNumber} className='btn btn-primary mt-2'>Generate Secret Number</button>
              </div>
            </div>
          </div>
          <div className="col-5 ms-3">
            <div className="card card-h" >
              <div className="card-header bg-primary">
                <h3>Guess the number between 1 to 10</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleCheck} className='d-flex'>
                  <input
                    className='form-control me-2'
                    type="text"
                    id='term'
                    name='term'
                    placeholder='Enter Your Number'
                    onChange={handleChange}
                  />
                  <button className="btn btn-outline-success" type="submit">Check</button>
                </form>
                
                {/* {data.guessResult && <p>{data.guessResult}</p>} */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-4' id='info'>
        
        <div className="row">
        <div className="col-6 ms-5">
          {data.name?
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
            
          </div>:""}
          </div>
          
          <div className="col">
            
            <p className='ms-5'>Instruction: <br />
            1.Enter player name and save it <br />
            2.Click on generateSecreteNumber(It will generate a random number between 1 to 10) <br />
            3.Enter the Guessed value in the number box and click on check button <br />
            4. You have only 2 chances<br/>
            5.If your guess is correct you will win the game 
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
