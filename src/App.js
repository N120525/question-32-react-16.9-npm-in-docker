import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [numberOne,setNumberOne] = React.useState('')
  const [numberTwo,setNumberTwo] = React.useState('')
  const [sumResults,setSumResults] = React.useState(null)

  return (
    <div className="App">
      <div>
        <p>Enter First number</p>
        <input id="Text1" type="number" onChange={(eve)=>setNumberOne(eve.target.value)} />
      </div>
      <div>
        <p>Enter second number</p>
        <input id="Text2" type="number" onChange={(eve)=>setNumberTwo(eve.target.value)} />
      </div>
      <div>
        <p>Results</p>
        <input id="txtresult" type="number" value={sumResults} />
      </div>
      <div>
       <button disabled={!Number(numberOne)|| !Number(numberTwo)} name="clickbtn" onClick={()=>setSumResults(Number(numberOne)+Number(numberTwo))}>display Results</button>
       </div>
    </div>
  );
}

export default App;
