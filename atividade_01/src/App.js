import './App.css';
import Evento from './components/Props';
import TipoIngresso from './components/Props_Ingressos';
import logo from './components/logo.svg';

function App() {
  return(
    
    <div className="App">
      <Evento nome="Carlos" data="22/15/2022" horario="22:30" local="Rua Bandeirantes, 2238" cidade="Cascavel-PR" genero="Velociraptor" />
      <h2>Ingressos:</h2 >
      <TipoIngresso tipo="Camarote(open bar)" preco="150,00"/>
      <TipoIngresso tipo="Camarote" preco="100,00"/>
      <TipoIngresso tipo="Front-stage" preco="60,00"/>
      <TipoIngresso tipo="Pista" preco="30,00"/>
      
    </div>
  )
}

export default App;
