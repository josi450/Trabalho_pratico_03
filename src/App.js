import Livros from './pages/livros'
import React, {useState, useEffect} from 'react'


function App() {
  
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Efeito colateral executado!');
  }, []);

  console.log('Componente renderizado!');

  return (
    <div className="container">
      <Livros/>
      <p>Você adicionou {contador} livros na lista</p>
    
    <button  type="submit" className="btn btn-primary" onClick = {() => {
    setContador(contador +1)}}>Contar número de livros na lista</button>
    </div>
    
  );
}

export default App;
