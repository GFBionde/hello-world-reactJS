import './App.css';
import ClassComponent from './components/FunctionalComponent.js';
import FunctionalComponent from './components/ClassComponent.js';
import Props from './components/Props.js';
import State from './components/State.js';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        
        <FunctionalComponent/> 
        
        <ClassComponent/> 
        
        <Props name="Propriedades"/>
      
        <State/>
      </header>
    </div>
  );
}

export default App;



/*
 <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Olá Mundo!</p>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Aprenda React
        </a>
      </header>
    </div>
*/
