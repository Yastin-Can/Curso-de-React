import react from "react";

function Boton({ texto, buttons, clicks }) {
    return (
      <button
        className={ buttons ? 'sum' : 'rest'}
        onClick={ clicks }
      >
        {texto}
      </button>  
    );
}

export default Boton;