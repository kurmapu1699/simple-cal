
import React,{useState} from 'react';
import './App.css';

function App() {

const [result,setResult]  = useState("");

const handleclick = e =>{
  setResult(result.concat(e.target.name));
};


const clear = e =>{
  setResult("")
};

const backspace = e =>{
  setResult(result.slice(0,-1))
};

const answer = e =>{
  try{
    setResult(eval(result).toString())
  }
  catch(err){
    setResult("error")
  }
};




  return (
    <div className="App">
      <h3>simple calculator</h3>
      <div>
        <input type="text" value={result} />
      </div>
      <div className='keyboard'>
        <button onClick={clear} id="clear">Clear</button>
        <button onClick={backspace} id="bgh">C</button>
        <button name="/" onClick={handleclick} id="bgh">&divide;</button>
        <button name="7" onClick={handleclick}>7</button>
        <button name="8" onClick={handleclick}>8</button>
        <button name="9" onClick={handleclick}>9</button>
        <button name="*" onClick={handleclick} id="bgh">&times;</button>
        <button name="4" onClick={handleclick}>4</button>
        <button name="5" onClick={handleclick}>5</button>
        <button name="6" onClick={handleclick}>6</button>
        <button name="-" onClick={handleclick} id="bgh">&ndash;</button>
        <button name="1" onClick={handleclick}>1</button>
        <button name="2" onClick={handleclick}>2</button>
        <button name="3" onClick={handleclick}>3</button>
        <button name="+" onClick={handleclick} id="bgh">+</button>
        <button name="0" onClick={handleclick}>0</button>
        <button name="." onClick={handleclick}>.</button>
        <button name="=" onClick={answer}id="answer">=</button>
      </div>
    </div>
  );
}

export default App;
