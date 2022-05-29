import { useState } from 'react';
import './App.css';
import Form from './components/Form';
// import Table from './components/Table'
function App() {
  const [toggle, setToggle] = useState(false);
  const toggel = () => {
    setToggle(!toggle)
  }
  return (
    <div className="App">
      <button onClick={toggel}>Toggle</button>
      {toggle ? <Form />:null}
      {/* <Table/> */}
    </div>
  );
}

export default App;
