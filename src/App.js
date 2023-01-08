import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>Este es el componente de descripcion</p>
}

const App = () => {
  return (
    <div className="App">
      <h1>Titulo de la App</h1>
      <strong>Estoy aprendiendo react</strong>
      <Mensaje />
      <Description />
    </div>
  );
}

export default App;
