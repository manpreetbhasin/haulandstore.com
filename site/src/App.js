import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className={'headline'}>
          <span>HAUL</span>
          <span className={'dash'}>-</span>

          <span>AND</span>
          <span className={'dash'}>-</span>
          <span>STORE</span>

        </div>
        <div className={'tagline'}>SECURE AND CONVENIENT</div>
      </header>
    </div>
  );
}

export default App;
