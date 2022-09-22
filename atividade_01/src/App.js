import React, { useEffect, useState } from "react";

function Atividade04() {

    const [vetor, setVetor] = useState([]);
    const [status, setStatus] = useState('Carregando');

    useEffect(() => {
      obterDados();
    });

    const obterDados = async () => {

        const dados = await fetch('https://api.github.com/orgs/rocketseat/repos');
        const converter = await dados.json();
        setVetor(converter);
        setStatus('>>> Dados de repositorio carregados <<<')

    }


    return(
        <div>
          <h1>{status}</h1>

          
            {vetor.map(objeto => (<header>
            <h2>{objeto.name}</h2>
            <p>{objeto.description}</p>
            <a href = {objeto.html_url}> Acessar repositorio </a>
            </header>))}

          
        </div>
    );

}

export default Atividade04;








// import './App.css';
// // import Evento from './components/Props';
// // import TipoIngresso from './components/Props_Ingressos';
// // import logo from './components/logo.svg';
// import React, { useState } from "react";
  
// const App = () => {

//   //  Counter is a state initialized to 0
//   const [counter, setCounter] = useState(0)
  
//   // Function is called everytime increment button is clicked
//   const handleClick1 = () => {
//     // Counter state is incremented
//     var valor = document.getElementById("counter").value;
//     setCounter(counter + valor++ )
//   }
  
//   // Function is called everytime decrement button is clicked
//   const handleClick2 = () => {
//     // Counter state is decremented
//     var valor = document.getElementById("counter").value;
//     setCounter(counter - valor)
//   }

//   const handleClick3 = () => {
//     // Counter state is decremented
//     setCounter(0)
//   }
  
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '300%',
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       top: '-15%',
//     }}>
//       Counter App
//       <div style={{
//         fontSize: '120%',
//         position: 'relative',
//         top: '10vh',
//       }}>
//         {counter}<br/>
//         Counter: <input type="text" id="counter" name="nome" /><br />
//       </div>
//       <div className="buttons">
//         <button style={{
//           fontSize: '60%',
//           position: 'relative',
//           top: '20vh',
//           marginRight: '10px',
//           backgroundColor: 'green',
//           borderRadius: '8%',
//           color: 'white',
//         }}
//           onClick={handleClick1}>Increment</button>
//         <button style={{
//           fontSize: '60%',
//           position: 'relative',
//           top: '20vh',
//           marginLeft: '10px',
//           backgroundColor: 'red',
//           borderRadius: '8%',
//           color: 'white',
//         }}
//           onClick={handleClick2}>Decrement</button>
//         <button style={{
//           fontSize: '60%',
//           position: 'relative',
//           top: '20vh',
//           marginRight: '10px',
//           backgroundColor: 'blue',
//           borderRadius: '8%',
//           color: 'white',
//         }}
//           onClick={handleClick3}>Reset</button>
//       </div>
//     </div>
//   )
// }
  
// export default App

// function App() {
//   return(
    
//     <div className="App">
//       <Evento nome="Carlos" data="22/15/2022" horario="22:30" local="Rua Bandeirantes, 2238" cidade="Cascavel-PR" genero="Velociraptor" />
//       <h2>Ingressos:</h2 >
//       <TipoIngresso tipo="Camarote(open bar)" preco="150,00"/>
//       <TipoIngresso tipo="Camarote" preco="100,00"/>
//       <TipoIngresso tipo="Front-stage" preco="60,00"/>
//       <TipoIngresso tipo="Pista" preco="30,00"/>
      
//     </div>
//   )
// }

// export default App;
