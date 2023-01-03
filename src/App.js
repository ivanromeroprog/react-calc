import React from 'react';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import logoApp from './img/Calculator.png';

function App() {

  const buttonAction = () => {
    console.log('test');
  }

  return (
    <div className="App">
      <div className="contenedor">
        <h1><img src={logoApp} className="logo" alt='Logo' /> React Calc</h1>
        
      </div>
      <div className="calculadora">
      <Screen input={''} />
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
          <Button action={buttonAction}>=</Button>
          <Button action={buttonAction}>/</Button>
        </div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
