import React from 'react';
import './App.css';

const number = document.querySelectorAll('.numero').values;
console.log(number)





function App() {
  return (
    <>
      <div className="container">
        <div className="calculadora">
            <div className="display">
                <div id="valor-anterior"></div>
                <div id="valor-actual"></div>
            </div>
            <button className="col-2">C</button>
            <button >&larr;</button>
            <button className="operador" value="dividir">%</button>
            <button className="numero">7</button>
            <button className="numero">8</button>
            <button className="numero">9</button>
            <button className="operador" value="multiplicar">X</button>
            <button className="numero">4</button>
            <button className="numero">5</button>
            <button className="numero">6</button>
            <button className="operador" value="subtrair">-</button>
            <button className="numero">1</button>
            <button className="numero">2</button>
            <button className="numero">3</button>
            <button className="operador" value="somar">+</button>
            <button className="col-2 numero">0</button>
            <button className="numero">.</button>
            <button className="operador" value="igual">=</button>
        </div>
    </div>

    </>
  );
}

export default App;
