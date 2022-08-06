import { useState } from 'react';
import reactLogo from '/react.svg';
import millionLogo from '/million.svg';
import './App.css';
import { Home } from "./pages"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;