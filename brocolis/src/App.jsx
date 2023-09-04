import React, { useState } from 'react';
import './App.css';
import brocolisImage from './assets/brocolis.png'; // Importe a imagem

function App() {
  const [count, setCount] = useState(0);
  const [isBrocolisVisible, setIsBrocolisVisible] = useState(true);

  function toggleBrocolis() {
    setCount(count + 1);
    setIsBrocolisVisible(!isBrocolisVisible);
  }

  return (
    <div className="body-container">
      <div className="container">
        {/* Use a imagem importada */}
        <img
          src={brocolisImage}
          className={isBrocolisVisible ? 'brocolis' : 'esquerda'}
          alt="Brocolis"
        />
        <p className="contagem">{count}</p>
        <button onClick={toggleBrocolis} className="count">
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default App;
