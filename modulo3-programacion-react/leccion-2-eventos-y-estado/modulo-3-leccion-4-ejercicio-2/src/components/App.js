import '../styles/App.css';
import { useState } from 'react';
console.log('( => Ready! )');

function App() {
  const [status, setStatus] = useState(false);
  let [classDark, setClassDark] = useState('');
  
  const handlerClickDarkMode = () =>{
    if(status === true){
      setStatus(false);
      setClassDark('')
    }else if (status === false){
      setStatus(true);
      setClassDark('dark');
    }
  }
  const renderDarkModeText = () =>{
    let textStatus = '';
    if(status === true){
      textStatus = "Tienes activado el dark mode";
    }else if (status === false){
      textStatus = null;
    }
    return textStatus;
  }
  return (
    <div className={classDark}>
      <button onClick={handlerClickDarkMode}>Des / activar el dark mode</button>
      <p>{renderDarkModeText()}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, doloribus totam dolorem consectetur fugiat aut exercitationem animi praesentium facere quasi quidem obcaecati, laborum id eos soluta ipsam placeat inventore adipisci.</p>
    </div>
  );
}

export default App;
