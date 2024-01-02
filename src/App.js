import './App.css';
import CasioLogo from './images/casio_logo.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input , setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    // console.log("Input a calcular: ", input);
    if (input) {
      setInput(evaluate(String(input)));
    } else {
      alert('Ingrese valores antes de realizar un calculo');
    }
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={CasioLogo}
          className='logo'
          alt='logo-calculadora'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear
            manejarClear={() => setInput('')}
          >Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
