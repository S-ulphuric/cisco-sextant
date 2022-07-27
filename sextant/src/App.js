import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The new Sextant app.
        </p>
        <a
          className="App-link"
          href="https://www.cisco.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cisco
        </a>
      </header>
    </div>
  );
}

export default App;
