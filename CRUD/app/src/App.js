
import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
    <Navbar/>
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <Routes>
        <Route exact path='/create' element={<Create/>} />
        <Route exact path='/read' element={<Read/>} />
        <Route path='/update' element={<Update/>} />
      </Routes>
     


    </div>
  </Router>
  );
}

export default App;
