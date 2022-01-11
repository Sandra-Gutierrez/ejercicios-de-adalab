import '../styles/App.css';
import { useState } from 'react';

console.log('( => Ready! )');

function App() {
  // Inicializamos la variable numero en 0 y la funcion para modificarla
  let [num, setNum] = useState(0);

  // Creamos la funcion manejadora que se ejecuta al pulsar el boton incrementar
  const handlerClickUp = () =>{
    setNum(num+1);
    console.log(num);
  };

  // Creamos la funcion manejadora que se ejecuta al pulsar el boton decrementar
  const handlerClickDown = () =>{
    setNum(num-1);
    console.log(num);
  };

  return (
    <div>
      <p>Contador: <span>{num}</span></p>
      <button onClick={handlerClickUp}>Incrementar</button>
      <button onClick={handlerClickDown}>Decrementar</button>
    </div>
  );
}

export default App;
