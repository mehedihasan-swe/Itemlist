



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

  return (
    <div className="App">
      <div className='cardlayout'>
        <div className='itemlayout'>
          {
            data.map(items => (
              <div key={items.id}>
                <h2>{items.title}</h2>
                <h3>{items.StartDate}</h3>
              </div>
            ))
          }
          <div className='modaldiv'>
            <button className='btn-modal'>Show Modal</button>
          </div>
          <div className='modaldiv'>
            <Modal>
              <h2>Children</h2>
            </Modal>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
