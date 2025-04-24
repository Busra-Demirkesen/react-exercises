import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import DisplayCount from './components/DisplayCount';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <DisplayCount count={count}/>
    </div>
  );
}

export default App;
