import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(name)}`)
    .then(response => response.json())
    .then(state => setGreeting(state.greeting)); 
  }

  // return function continues...

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{greeting}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
