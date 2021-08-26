
import './App.css';
import Mensaje from './Components/Mensaje.js';

// creamos componentes para luego reutilizar aqui o en en otro archivo component a parte.
const Description = () => {
  return <p>Esta es la primer app del Bootcamp con Midu</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color = 'red' message= 'Estamos trabajando'/>
      <Mensaje color= 'green' message= 'en un curso' />
      <Mensaje color= 'yellow' message= 'de React'/>
      <Description />
    </div>
  );
}

export default App;
