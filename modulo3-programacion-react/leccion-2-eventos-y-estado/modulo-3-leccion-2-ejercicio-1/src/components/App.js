import '../styles/App.css';

console.log('( => Ready! )');

const App = () => {
  const handleInput = (ev) => {
    const inputValue = document.querySelector('.js-inputName').value; 
    const inputString = inputValue.toString();
    console.log(inputString[inputString.length-1]);
  };

  return (
    <div>
      <input onKeyUp={handleInput} className="js-inputName" placeholder="Escribe tu nombre"/>
    </div>
  );
};

export default App;
