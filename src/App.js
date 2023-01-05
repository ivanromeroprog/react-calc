import React, { useState } from 'react'
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import CalcLogo from './components/CalcLogo';
import {evaluate} from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const buttonAction = (newInput) => {
    setInput(input + newInput);
  };

  const equalButtonAction = () => {
    if(input){
      setInput(evaluate(input));
    }
    else
    {
      alert('Ingrese una operación válida');
    }
  };

  const clearButtonAction = ()=>{
    setInput('');
  };

  return (
    <div className="App">
      <CalcLogo />
      <div className="calculadora">
      <Screen input={input} />
        <div className="fila">
          <Button action={buttonAction}>1</Button>
          <Button action={buttonAction}>2</Button>
          <Button action={buttonAction}>3</Button>
          <Button action={buttonAction}>+</Button>
        </div>
        <div className="fila">
          <Button action={buttonAction}>4</Button>
          <Button action={buttonAction}>5</Button>
          <Button action={buttonAction}>6</Button>
          <Button action={buttonAction}>-</Button>
        </div>
        <div className="fila">
          <Button action={buttonAction}>7</Button>
          <Button action={buttonAction}>8</Button>
          <Button action={buttonAction}>9</Button>
          <Button action={buttonAction}>*</Button>
        </div>
        <div className="fila">
          <Button action={buttonAction}>0</Button>
          <Button action={buttonAction}>.</Button>
          <Button action={equalButtonAction}>=</Button>
          <Button action={buttonAction}>/</Button>
        </div>
        <div className="fila">
          <ClearButton action={clearButtonAction}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
