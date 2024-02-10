// import logo from './logo.svg';
// import './App.css';
import Contact from './PortFolio/Data/Contact';
import Content from './PortFolio/Data/Content';
import Portfolio from './PortFolio/Data/Portfolio';
import ToolTech from './PortFolio/Data/ToolTech';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Portfolio/>
      {/* <ToolTech/> */}
      {/* <Content/> */}
      {/* <Contact/> */}
     
    </div>
  );
}

export default App;
