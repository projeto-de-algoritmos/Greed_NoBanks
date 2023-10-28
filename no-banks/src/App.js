import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontSize: "90px"}}>
          No Banks.
        </p>
      </header>
      <div className='body'>
      <p>
        <input
          placeholder="Enter Deposit"
          min="3" 
          max="100"
        />
        <button>Sacar</button>
      </p>
      </div>
    </div>
  );
}

export default App;