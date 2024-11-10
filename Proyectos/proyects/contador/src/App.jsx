import { useState } from 'react';
import './App.css';
import freeCodeCampLogo from './img/logo.png';
import Boton from './button';
import { Contador } from './contador';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const sumar = () => {
    setNumClicks(numClicks + 1);
    console.log('se quiere sumar 1')
  }

  const restar = () => {
    setNumClicks(numClicks - 1);
    console.log('se quiere restar 1')
  }

  const reiniciar = () => {
    setNumClicks(0);
  }

  return (
    <section className='section'>
      <img
        className='freecodecamp'
        src={freeCodeCampLogo}
        alt="Logo freeCodeCamp"
      />
      <div className='container-num'>
        <Contador numClicks = {numClicks} />
      </div>
      <div className='container-button'>
        <Boton texto={+1} buttons={true} clicks={sumar} />
        <Boton texto={-1} buttons={false} clicks={restar} />
      </div>
      <button className='recet' onClick={reiniciar}> REINICIAR </button>
    </section>
  ); 
}

export default App
