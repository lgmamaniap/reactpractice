import './App.css';
import Contador from './Contador';
import ListaElementos from './ListaElementos';
import Mensaje from './Mensaje';

const App = () => {
  return (
    <div className="App">
      <h1>Prueba de contador:</h1>
      <br />
      <Mensaje mensaje='El valor de contador es: '/>
      <Contador />
      <ListaElementos />
    </div>
  );
}

export default App;
