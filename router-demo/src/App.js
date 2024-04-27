import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="App">
      <div className="List">
        <ul style={{display: 'flex', justifyContent: 'space-between'}}>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
