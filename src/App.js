
import { useState } from 'react';
import './App.css';
import Titlename from './Titlename';

function App() {

    const [number, setnumber]=useState(1);
    const handleclick= () => {
      setnumber(prevState=>prevState+1)
    }
      return (
    <div className="App">
     <div>
      <h1>My name is <br></br></h1>
      <button onClick={handleclick}>Click Me </button>
      <Titlename number={number}></Titlename>
     </div>
    </div>
  );
}

export default App;
