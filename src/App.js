
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
   {
    id: 4,
    title: "i love Javascript",
    StartDate: "20/8/2016"
  },
  {
    id: 5,
    title: "i love python",
    StartDate: "20/8/2017"
  },
  {
    id: 6,
    title: "i love php",
    StartDate: "20/8/2018"
  },
]

function App() {
  const[showmodal,setShowModal] = useState(false);
  const [dataitems, setdataItems]=useState(data);
  const handleDelete=(id)=>{
    console.log(id);
    const filterlistitem=dataitems.filter(item=>item.id !== id);
    setdataItems(filterlistitem);
  }
  return (
    <div className="App">
      <div className='cardlayout'>
        <div className='itemlayout'>
          {
            dataitems.map(items => (
              <div className='card-elements' key={items.id} onClick={()=>handleDelete(items.id)}>
                <h2>{items.title}</h2>
                <h3>{items.StartDate}</h3>
              </div>
            ))
          }
          <div className='modaldiv'>
            <button className='btn-modal' onClick={(e)=>setShowModal(true)}>Show Modal</button>
          </div>
          <div className='modaldiv'>
            {
              showmodal && <Modal>
               <Adlist setShowModal={setShowModal} setdataItems={setdataItems}></Adlist>
              </Modal>
            }
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
