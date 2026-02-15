

import { useState } from 'react';
import Adlist from './Adlist';
import './App.css';
import Modal from './Modal';

const data = [
  {
    id: 1,
    title: "i love Javascript",
    StartDate: "20/8/2016"
  },
  {
    id: 2,
    title: "i love python",
    StartDate: "20/8/2017"
  },
  {
    id: 3,
    title: "i love php",
    StartDate: "20/8/2018"
  },
]
function App() {

  const [showmodal, setShowModal]=useState(false);

  return (
    <div className="App">
      {
        data.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h2>{item.StartDate}</h2>
          </div>
        ))
      }
      <div className="btn_container">
      <button onClick={(e) => setShowModal(true)}>add List</button>
      </div>

    {
      showmodal && 
      <Modal>
        <Adlist></Adlist>
        <button onClick={e => setShowModal(false)}>CLOSE MODAL</button>
      </Modal>
    }
      
    </div>
  );
}

export default App;
