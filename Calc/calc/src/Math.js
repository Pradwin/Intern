import React from 'react'
import { useState } from 'react';
import { sqrt,log10,sin,cos,tan } from 'mathjs';

function Math() {
    const [result, setResult] = useState("");

  const handleClick = (e) => {
   setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0,-1));
  }
  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }catch(err){
      setResult("Error");
    }

  }
   const square = () => {
    setResult((result*result).toString());
   }
   const squareroot = () => {
    setResult(sqrt(result).toString());
   }
   const log = () => {
    setResult(log10(result).toString());
   }
   const Sin = () => {
    setResult(sin(result).toString());
   }
   const Cos = () => {
    setResult(cos(result).toString());
   }
   const Tan = () => {
    setResult(tan(result).toString());
   }
   const pi=()=>{
    setResult(result.concat(3.14159265359).toString());
   }
   const factorial=()=>{ 
        let ans = 1;       
        if(result === 0)
            return 1;
        for (let i = 2; i <= result; i++) 
            ans = ans * i;  
        setResult(ans.toString());
   }
  return (
    <div>
      <div className="container">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button className='highlight' onClick={clear} id='clear'>Clear</button>
        <button className='highlight' onClick={backspace} id="backspace">C</button>
        <button className='highlight' name='/' onClick={handleClick}>&divide;</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button className='highlight' name='*' onClick={handleClick}>&times;</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button className='highlight' name='-' onClick={handleClick}>&ndash;</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button className='highlight' name='+' onClick={handleClick}>+</button>
        <button name='0' onClick={handleClick}>0</button>
        <button className='highlight' name='.' onClick={handleClick}>.</button>
        <button className='highlight' name='log' onClick={log}>log</button>
        <button className='highlight' name='Sin' onClick={Sin}>Sin</button>
        <button className='highlight' name='Cos' onClick={Cos}>Cos</button>
        <button className='highlight' name='Tan' onClick={Tan}>Tan</button>
        <button className='highlight' name='x^2' onClick={square}>Square</button>
        <button className='highlight' name='√' onClick={squareroot}>√</button>
        <button className='highlight' name='Pi' onClick={pi}>𝝿</button>
        <button className='highlight' name='Factor' onClick={factorial}>!</button>
        <button onClick={calculate} id='result'>=</button>
      </div>
      </div>
    </div>
  )
}

export default Math
