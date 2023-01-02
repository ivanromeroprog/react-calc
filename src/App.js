import './App.css';
import Button from './components/Button';
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
        <div className="fila">
          <Button action={buttonAction}>Test</Button>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
